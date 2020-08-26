import { getSettings, Settings, saveSettings } from "../../states/SettingsState";

export async function createSettings(setting : string, value : number){
  var settings : Settings = await getSettings();

  if ('maxSearch'.localeCompare(setting) === 0){
    settings.maxSearch = value;
  } else if ('searchStored'.localeCompare(setting) === 0) {
    settings.searchStored = value;
  } else if ('diceStored'.localeCompare(setting) === 0) {
    settings.diceStored = value;
  }

  saveSettings(settings);
}