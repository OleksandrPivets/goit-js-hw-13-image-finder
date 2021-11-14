import { notice, error } from '@pnotify/core';
import { defaults } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/Material.css';
import 'material-design-icons/iconfont/material-icons.css';
defaults.styling = 'material';
defaults.icons = 'material';

function myNotice() {
 notice({
  text: 'Too many matches found. Please enter a more specific query!',
  delay: 2500,
 });
}

function myError() {
 error({
  text: "There's no country with this name",
  delay: 2500,
 });
}
export { myNotice, myError };