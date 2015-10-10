import dom from 'vd';

// Localization prototype

export function join(room) {
  return ['Rejoignez ', dom('b', room), ' sur Slack'];
}

export function state(active, total) {
  return active ? [
    dom('b.active', active), ' utilisateurs en ligne sur ',
    dom('b.total', total), ' utilisateurs enregistrés.'
  ] : [
    dom('b.total', total), ' utilisateurs sont enregistré jusqu\'à présent.'
  ];
}

export function getinvite(){
  return dom('button.loading', 'Recevoir mon invitation');
}

export function powered(){
  return 'propulsé par ';
}
