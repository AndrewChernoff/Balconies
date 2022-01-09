import "./slider";
import modal from "./modules/modal";
import tabs from "./modules/tabs";

modal();
tabs('.glazing_block', '.glazing_block a', '.glazing_content', 'active');
tabs('.decoration_item', '.decoration_item div', '.decoration_kind', 'after_click');