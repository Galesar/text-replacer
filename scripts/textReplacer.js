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

export function ciclemen(value)
{
  let str = " " + value;
  for (let i = 0; i < mestDictionary.length; ++i) {
    str = str.replace(mestobDictionary[i], mestob2Dictionary[i]);
  }
  for (let i = 0; i < verb1Dictionary.length; ++i)
    str = str.replace(verb1Dictionary[i], verb2Dictionary[i]);
  for (let i = 0; i < mest2Dictionary.length; ++i)
    str = str.replace(mest2Dictionary[i], menmest2Dictionary[i]);
  for (let i = 0; i < mestDictionary.length; ++i)
    str = str.replace(mestDictionary[i], menmestDictionary[i]);
  return str;
}

export function ciclewomen(value)
{
  let str = " " + value;
  for (let i = 0; i < mestDictionary.length; ++i) {
    str = str.replace(mestobDictionary[i], mestob2Dictionary[i]);
  }
  for (let i = 0; i < verb1Dictionary.length; ++i)
    str = str.replace(verb1Dictionary[i], verb2Dictionary[i]);
  for (let i = 0; i < mest2Dictionary.length; ++i)
    str = str.replace(mest2Dictionary[i], wommest2Dictionary[i]);
  for (let i = 0; i < mestDictionary.length; ++i)
    str = str.replace(mestDictionary[i], wommestDictionary[i]);
  return str;
}