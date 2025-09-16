import Header from './Header.js'
import TabsCollection from './Tabs.js'
import Like from "./Like.js"
import Counter from "./Counter.js"
import VideoPlayerCollection from "./VideoPlayer.js";
import ExpandableContentCollection from "./ExpandableContent.js";
import TabLinksCollection from "./TabLinks.js";
import InputMaskCollection from "./InputMask.js";
import SelectCollection from "./Select.js";
import FormValidator from "./FormValidator.js";

new SelectCollection()
new Header()
new TabsCollection()
new Like()
new Counter('[data-js-discuss]', '[data-js-discuss-number]')
new Counter('[data-js-share]', '[data-js-share-number]')
new VideoPlayerCollection()
new ExpandableContentCollection()
new TabLinksCollection()
new InputMaskCollection()
