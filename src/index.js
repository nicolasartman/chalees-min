import './main.scss';
import Elm from './Main.elm';
import 'normalize.css';

var root = document.getElementById('root');

var app = Elm.Main.embed(root);
