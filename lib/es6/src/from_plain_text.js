// Generated by BUCKLESCRIPT VERSION 1.7.4, PLEASE EDIT WITH CARE
'use strict';

import * as List        from "bs-platform/lib/es6/list.js";
import * as $$Array     from "bs-platform/lib/es6/array.js";
import * as Caml_string from "bs-platform/lib/es6/caml_string.js";

function toPosition(x, y, $$char) {
  if ($$char !== 79) {
    return /* tuple */[
            /* tuple */[
              x,
              y
            ],
            /* Dead */1
          ];
  } else {
    return /* tuple */[
            /* tuple */[
              x,
              y
            ],
            /* Alive */0
          ];
  }
}

function explode(s) {
  var _i = s.length - 1 | 0;
  var _l = /* [] */0;
  while(true) {
    var l = _l;
    var i = _i;
    if (i < 0) {
      return l;
    } else {
      _l = /* :: */[
        Caml_string.get(s, i),
        l
      ];
      _i = i - 1 | 0;
      continue ;
      
    }
  };
}

function lineToUniserse(x, input) {
  var chars = explode(input);
  return List.mapi(function (param, param$1) {
              return toPosition(x, param, param$1);
            }, chars);
}

function toUniverse(str) {
  var lines = $$Array.to_list(str.split("\n"));
  return List.concat(List.mapi(lineToUniserse, lines));
}

export {
  toPosition     ,
  explode        ,
  lineToUniserse ,
  toUniverse     ,
  
}
/* No side effect */