import menmestDictionary from './Dictionary/men/menmestDictionary'
import menmest2Dictionary from './Dictionary/men/menmest2Dictionary'
import mest2Dictionary from './Dictionary/mest/mest2Dictionary'
import mestDictionary from './Dictionary/mest/mestDictionary'
import mestob2Dictionary from './Dictionary/mestob/mestob2Dictionary'
import mestobDictionary from './Dictionary/mestob/mestobDictionary'
import verb1Dictionary from './Dictionary/verb/verb1Dictionary'
import verb2Dictionary from './Dictionary/verb/verb2Dictionary'
import wommest2Dictionary from './Dictionary/women/wommest2Dictionary'
import wommestDictionary from './Dictionary/women/wommestDictionary'

export function ciclemen(value) {
  let str = value.split(' ');
  let newArr = str.map((item, index) => {
    let temp = item + ' '
    if(!temp.startsWith(' ')) temp = ' ' + temp;
    for (let i = 0; i <= 152; ++i) {
      temp = temp.replace(mestobDictionary[i], mestob2Dictionary[i]);
    }
    for (let i = 0; i <= 256; ++i)
    temp = temp.replace(verb1Dictionary[i], verb2Dictionary[i]);
    for (let i = 0; i <= 200; ++i)
    temp = temp.replace(mest2Dictionary[i], menmest2Dictionary[i]);
    for (let i = 0; i <= 111; ++i) {
      temp = temp.replace(mestDictionary[i], menmestDictionary[i]);
    }
    if(temp.endsWith(' ')) temp = temp.trim();
    return temp;
  })
  return (newArr.join(' '));
}

export function ciclewomen(value) {
  let str = value.split(' ');
  let newArr = str.map((item, index) => {
    let temp = item + ' '
    if(!temp.startsWith(' ')) temp = ' ' + temp;
    for (let i = 0; i < mestob2Dictionary.length; ++i) {
      temp = temp.replace(mestobDictionary[i], mestob2Dictionary[i]);
    }
    for (let i = 0; i < verb2Dictionary.length; ++i)
      temp = temp.replace(verb1Dictionary[i], verb2Dictionary[i]);
    for (let i = 0; i < wommest2Dictionary.length; ++i)
      temp = temp.replace(mest2Dictionary[i], wommest2Dictionary[i]);
    for (let i = 0; i < wommestDictionary.length; ++i)
      temp = temp.replace(mestDictionary[i], wommestDictionary[i]);
    if(temp.endsWith(' ')) temp = temp.trim();
    return temp;
  })
  return (newArr.join(' '));
}