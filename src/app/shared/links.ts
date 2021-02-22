import {Link} from './link';

export const links : Link[] = [
  {name: 'Accueil', route: ''},
  {name: 'École de golf', route: ''} ,
  {name: 'Espace adhérent', subLinks : ['Link1', 'Link2', 'Link3'], route: ''},
  {name: 'Tournois', route: ''} ,
  {name: 'Calendrier' , route: ''},
  {name: 'Stages', subLinks : ['Link1', 'Link2', 'Link3'], route: ''},
  {name: 'Galerie', route: ''},
  {name: 'Golf partenaires', subLinks : ['Link1', 'Link2', 'Link3'], route: ''},
  {name: 'Sponsors', subLinks : ['Link1', 'Link2', 'Link3'], route: ''},
  {name: 'Contact', route: ''}
]
