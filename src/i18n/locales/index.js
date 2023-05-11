import es from './default.json';
import es_negative from './default.es_negative.json';
import en from './default.en.json';
import questionsEs from '../../components/Questions/locales/default.json';
import questionsEsNegative from '../../components/Questions/locales/default.es_negative.json';
import questionsEn from '../../components/Questions/locales/default.en.json';

es['es'].questions = questionsEs['es'];
es_negative['es'].questions = questionsEsNegative['es'];
en['en'].questions = questionsEn['en'];


export {
  es,
  es_negative,
  en,
};
