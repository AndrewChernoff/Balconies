import "./slider";
import modal from "./modules/modal";
import tabs from "./modules/tabs";
import forms from "./modules/forms";
import clacData from "./modules/calcData";
import timer from "./modules/timer";


let calcStorage = {};

modal();
tabs('.glazing_block', '.glazing_block a', '.glazing_content', 'active');
tabs('.decoration_item', '.decoration_item div', '.decoration_kind', 'after_click');
tabs('.balcon_icons_img img', '.balcon_icons_img', '.big_img img', 'do_image_more');
forms(calcStorage);
clacData(calcStorage);
timer()