import { NavigateFunction, NavLink, useNavigate } from 'react-router-dom';
import { items, menuIcons, menuList } from './models.ts';
import { IconMenuType, NavPropsTypes } from './types.ts';
import { Dropdown, MenuProps, Space } from 'antd';
import { DownOutlined } from '@ant-design/icons';

const Nav = ({ classes, menu, isCloseMenu }: NavPropsTypes) => {
  const navigate: NavigateFunction = useNavigate();

  const onClick: MenuProps['onClick'] = ({ key }) => {
    if (isCloseMenu) isCloseMenu(false);
    navigate(key);
  };

  const onCloseMenu = () => {
    if (isCloseMenu) isCloseMenu(false);
  };

  if (menu) {
    return (
      <>
        <div className={classes}>
          {Object.keys(menuList).map((item: string) => {
            if (item === 'features') {
              return (
                <Dropdown menu={{ items, onClick }} key={item}>
                  <NavLink
                    to={menuList[item]}
                    key={item}
                    className={({ isActive }) =>
                      isActive ? 'font-bold capitalize' : 'capitalize'
                    }
                  >
                    <Space>
                      Features
                      <DownOutlined />
                    </Space>
                  </NavLink>
                </Dropdown>
              );
            }
            return (
              <NavLink
                to={menuList[item]}
                onClick={onCloseMenu}
                key={item}
                className={({ isActive }) =>
                  isActive ? 'font-bold capitalize' : 'capitalize'
                }
              >
                {item}
              </NavLink>
            );
          })}
        </div>
      </>
    );
  }

  return (
    <div className={classes}>
      {Object.values(menuIcons).map((item: IconMenuType) => {
        return (
          <NavLink to={item.route} key={item.route}>
            <img src={item.icon} alt={item.icon} />
          </NavLink>
        );
      })}
    </div>
  );
};

export default Nav;
