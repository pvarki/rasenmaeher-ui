#!/usr/bin/python3

import os
import sys
import json
import yaml
import base64
import argparse
from typing import List, Dict, Any

def merge_yaml_files(yaml_files: List[str]) -> List[Dict[str, Any]]:
    merged_data = []
    for file in yaml_files:
        with open(file, 'r') as f:
            data = yaml.safe_load(f)
            if isinstance(data, list):
                merged_data.extend(data)
            else:
                raise ValueError(f"YAML file {file} does not contain a list at the root level.")
    return merged_data

def filter_by_language(data: List[Dict[str, Any]], language: str) -> List[Dict[str, Any]]:
    return [item for item in data if item.get('lang') == language]

def embed_images(data: List[Dict[str, Any]], base_dir: str) -> List[Dict[str, Any]]:
    def embed_image_property(item: Dict[str, Any]):
        for key, value in item.items():
            if isinstance(value, dict):
                embed_image_property(value)
            elif isinstance(value, list):
                for sub_item in value:
                    if isinstance(sub_item, dict):
                        embed_image_property(sub_item)
            elif (key == 'image' or key == 'src') and isinstance(value, str):
                image_path = os.path.join(base_dir, value)
                if os.path.isfile(image_path):
                    with open(image_path, 'rb') as image_file:
                        encoded_string = base64.b64encode(image_file.read()).decode('utf-8')
                        mime_type = "image/" + os.path.splitext(image_path)[1][1:]  # e.g., "image/png"
                        data_url = f"data:{mime_type};base64,{encoded_string}"
                        item[key] = data_url
                else:
                    raise FileNotFoundError(f"Image file not found: {image_path}")

    for obj in data:
        embed_image_property(obj)

    return data

def main(directory: str, output_type: str, language: str):

    # Get all .yml files in the directory
    yaml_files = [os.path.join(directory, file) for file in os.listdir(directory) if file.endswith('.yml')]


    if not yaml_files:
        print(f"No .yml files found in the directory: {directory}", file=sys.stderr)
        return
    
    try:
        merged_data = merge_yaml_files(yaml_files)
        filtered_data = filter_by_language(merged_data, language)
        embedded_data = embed_images(filtered_data, directory)

        if output_type == 'json':
            print(json.dumps(embedded_data, indent=2))
        elif output_type == 'yml':
            print(yaml.dump(embedded_data, default_flow_style=False))
        else:
            print(f"Unsupported output type: '{output_type}'. Please use 'json' or 'yml'.", file=sys.stderr)

    except Exception as e:
        print(f"Error: {e}", file=sys.stderr)

if __name__ == "__main__":

    parser = argparse.ArgumentParser(description="Merge all YAML files in a directory into a single array and print it as JSON or YAML.")
    parser.add_argument("directory", type=str, help="Directory containing the YAML files to merge.")
    parser.add_argument("output_type", type=str, choices=['json', 'yml'], help="Output format: 'json' or 'yml'.")
    parser.add_argument("language", type=str, help="Language to filter.")
    args = parser.parse_args()
    
    main(args.directory, args.output_type, args.language)
