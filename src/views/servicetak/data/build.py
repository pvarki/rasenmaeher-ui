#!/usr/bin/python3

import os
import json
import yaml
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

def main(directory: str, output_type: str, language: str):

    # Get all .yml files in the directory
    yaml_files = [os.path.join(directory, file) for file in os.listdir(directory) if file.endswith('.yml')]


    if not yaml_files:
        print(f"No .yml files found in the directory {directory}")
        return
    
    try:
        merged_data = merge_yaml_files(yaml_files)
        filtered_data = filter_by_language(merged_data, language)

        if output_type == 'json':
            print(json.dumps(filtered_data, indent=2))
        elif output_type == 'yml':
            print(yaml.dump(filtered_data, default_flow_style=False))
        else:
            print(f"Unsupported output type: {output_type}. Please use 'json' or 'yml'.")

    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":

    parser = argparse.ArgumentParser(description="Merge all YAML files in a directory into a single array and print it as JSON or YAML.")
    parser.add_argument("directory", type=str, help="Directory containing the YAML files to merge.")
    parser.add_argument("output_type", type=str, choices=['json', 'yml'], help="Output format: 'json' or 'yml'.")
    parser.add_argument("language", type=str, help="Language to filter.")
    args = parser.parse_args()
    
    main(args.directory, args.output_type, args.language)
