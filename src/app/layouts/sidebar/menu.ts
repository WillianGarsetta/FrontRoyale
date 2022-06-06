import { MenuItem } from './menu.model';

export const MENU: MenuItem[] = [
    {
        id: 1,
        label: 'MENUITEMS.MENU.TEXT',
        isTitle: true
    },
    {
        id: 2,
        label: 'MENUITEMS.DASHBOARDS.TEXT',
        icon: 'bx-home-circle',
        badge: {
            variant: 'info',
            text: 'MENUITEMS.DASHBOARDS.BADGE',
        },
        subItems: [
            {
                id: 3,
                label: 'MENUITEMS.DASHBOARDS.LIST.DEFAULT',
                link: '/dashboard',
                parentId: 2
            },
            {
                id: 4,
                label: 'MENUITEMS.DASHBOARDS.LIST.SAAS',
                link: '/dashboards/saas',
                parentId: 2
            },
            {
                id: 5,
                label: 'MENUITEMS.DASHBOARDS.LIST.CRYPTO',
                link: '/dashboards/crypto',
                parentId: 2
            },
            {
                id: 6,
                label: 'MENUITEMS.DASHBOARDS.LIST.BLOG',
                link: '/dashboards/blog',
                parentId: 2
            },
        ]
    },
    {
        id: 7,
        isLayout: true
    },
    {
      id: 8,
      label: 'MENUITEMS.FORMS.TEXT',
      icon: 'bxs-eraser',
      badge: {
          variant: 'danger',
          text: 'MENUITEMS.FORMS.BADGE',
      },
      subItems: [
          {
              id: 9,
              label: 'MENUITEMS.FORMS.LIST.CADASTRO',
              link: '/usuario/cadastro',
              parentId: 8
          },
          {
            id: 10,
            label: 'MENUITEMS.FORMS.LIST.LISTA',
            link: '/usuario/lista',
            parentId: 8
        },

      ]
  }


];

