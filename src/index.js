import nav from './nav';
import { top, bottom, footer } from './footer';
import makeButton from './button';
import makeImage from './image';
import { makeColorStyle } from './button-styles';
import buttonStyle from './button.css';
import imageUrl from './html.jpg';

const button = makeButton('1st button');
document.body.appendChild(button);
button.style = makeColorStyle('blue');

const image = makeImage(imageUrl);
document.body.appendChild(image);

document.body.appendChild(footer);

console.log(nav(), top, bottom, makeColorStyle('cyan'));