import { IconMenuType, MenuType } from './types.ts';
import profile from '../../assets/img/icons/user.svg';
import basket from '../../assets/img/icons/basket.svg';
import { MenuProps } from 'antd';

export const menuIcons: MenuType<IconMenuType> = {
  profile: {
    route: '/profile',
    icon: profile,
  },
  basket: {
    route: '/basket',
    icon: basket,
  },
};

export const menuList: MenuType<string> = {
  home: '/',
  features: '/features',
  blog: '/blog',
  shop: '/shop',
  about: '/about',
  contact: '/contact',
};

export const items: MenuProps['items'] = [
  { label: 'Blog', key: '/blog' },
  { label: 'Shop', key: '/shop' },
  { label: 'About', key: '/about' },
  { label: 'Contact', key: '/contact' },
];
