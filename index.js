import {initCodeExample} from './components/initCodeExample';
import {initVideoPlay} from './components/initVideoPlay';
import {initSlider} from './components/initSlider';
import {initAccordion} from './components/initAccordion';

export function runAfterDomLoad() {
    initCodeExample()
    initVideoPlay()
    initSlider()
    initAccordion()
}
