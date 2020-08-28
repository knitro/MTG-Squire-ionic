import { getSettings, SettingsState, saveSettings } from "../../states/SettingsState";

export async function updateSettings(setting : string, value : number) {
  var settings : SettingsState = await getSettings();

  if ('searchStored'.localeCompare(setting) === 0) {
    settings.searchStored = value;
  } else if ('diceStored'.localeCompare(setting) === 0) {
    settings.diceStored = value;
  }
  saveSettings(settings);
}

export async function updateSettingCurrency(value : string) {
  var settings : SettingsState = await getSettings();
  settings.currency = value;
  saveSettings(settings);
  console.log(value);
}