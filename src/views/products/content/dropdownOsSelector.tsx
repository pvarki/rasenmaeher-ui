import DropdownOsSelector from "../../../components/tak/DropdownOsSelector";
import { parseOperatingSystem } from "../../../hook/helpers/getOperatingSystem";
import { BaseContent } from "../../../libs/rune/types/BaseContent";
import { CompiledRenderer } from "../../../libs/rune/types/CompiledRenderer";
import { RendererCompiler } from "../../../libs/rune/types/RendererCompiler";
import { DOWNLOAD_OPTIONS_SERVICE } from "../services/downloadOptionsService";
import { DropdownOsSelectorContent } from "../types/DropdownOsSelectorContent";

export const dropdownOsSelector : RendererCompiler<BaseContent> = (content: DropdownOsSelectorContent) : CompiledRenderer => {
  return () => <DropdownOsSelector
    initialOS={content?.initialOS ?? DOWNLOAD_OPTIONS_SERVICE.getSelectedOS() === 'iOS' ? 'iOS' : 'Other'}
    osOptions={content?.options ?? []}
    onOSChange={(newOS: string) => DOWNLOAD_OPTIONS_SERVICE.setSelectedOS(parseOperatingSystem(newOS))}
  />
}
