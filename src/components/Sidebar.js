import React, { useState } from "react";
import styled from "styled-components/macro";
import { rgba } from "polished";
import { NavLink, withRouter } from "react-router-dom";
import { darken } from "polished";
import PerfectScrollbar from "react-perfect-scrollbar";
import { useTheme } from '@material-ui/core/styles';
import { toggleSidebar } from "../redux/actions/themeActions";
import { useFetch } from "../hooks"
import {
  withStyles
} from "@material-ui/core/styles";
import "../vendor/perfect-scrollbar.css";
import { accountSettingRoute } from "../routes"

import {
  Badge,
  Chip,
  Grid,
  Avatar,
  Collapse,
  Drawer as MuiDrawer,
  List as MuiList,
  ListItem,
  ListItemText,
  Typography,
  Tooltip,
} from "@material-ui/core";

import { ExpandLess, ExpandMore } from "@material-ui/icons";

import { AlignLeft } from "react-feather";

import { sidebarRoutes as routes } from "../routes/index";
import { useDispatch } from "react-redux";

const SidebarCategory = ({
  name,
  icon,
  classes,
  isOpen,
  isCollapsable,
  badge,
  sidebarToggle,
  tooltip,
  ...rest
}) => {
  return (
    <NavItemTooltip title={tooltip}>
      <Category {...rest}>
        {icon}
        {sidebarToggle &&
          <>
            <CategoryText>{name}</CategoryText>
            {isCollapsable ? (
              isOpen ? (
                <CategoryIconMore />
              ) : (
                <CategoryIconLess />
              )
            ) : null}
            {badge ? <CategoryBadge label={badge} /> : ""}
          </>
        }
      </Category>
    </NavItemTooltip>
  );
};

const SidebarLink = ({ name, to, badge, icon }) => {
  return (
    <Link
      button
      dense
      component={NavLink}
      exact
      to={to}
      activeClassName="active"
    >
      <LinkText>{name}</LinkText>
      {badge ? <LinkBadge label={badge} /> : ""}
    </Link>
  );
};

const Sidebar = ({ classes, staticContext, location, ...rest }) => {
  const theme = useTheme();
  const dispatch = useDispatch();

  const { loading, error, data: tooltips = [] } = useFetch('/sidebar-tooltip.json');

  const initOpenRoutes = () => {
    /* Open collapse element that matches current url */
    const pathName = location.pathname;

    let _routes = {};

    routes.forEach((route, index) => {
      const isActive = pathName.indexOf(route.path) === 0;
      const isOpen = route.open;
      const isHome = route.containsHome && pathName === "/";

      _routes = Object.assign({}, _routes, {
        [index]: isActive || isOpen || isHome,
      });
    });

    return _routes;
  };

  const [openRoutes, setOpenRoutes] = useState(() => initOpenRoutes());

  const toggle = (index) => {
    // Collapse all elements
    Object.keys(openRoutes).forEach(
      (item) =>
        openRoutes[index] ||
        setOpenRoutes((openRoutes) =>
          Object.assign({}, openRoutes, { [item]: false })
        )
    );

    // Toggle selected element
    setOpenRoutes((openRoutes) =>
      Object.assign({}, openRoutes, { [index]: !openRoutes[index] })
    );
  };

  return (
    <Drawer variant="permanent" {...rest}>
      <Scrollbar>
        <SidebarToggler>
          <Tooltip title="Toggle Sidebar">
            <AlignLeft onClick={() => {dispatch(toggleSidebar(!theme.sidebar.toggle))}} />
          </Tooltip>
        </SidebarToggler>
        <List disablePadding>
          <Items>
            {!loading && routes.map((category, index) => (
              <React.Fragment key={index}>
                { category.header ? (
                  <SidebarSection>{category.header}</SidebarSection>
                ) : null}

                {category.children && category.icon ? (
                  <React.Fragment key={index}>
                    <SidebarCategory
                      isOpen={!openRoutes[index]}
                      isCollapsable={true}
                      name={category.name}
                      icon={category.icon}
                      button={true}
                      onClick={() => toggle(index)}
                      sidebarToggle={theme.sidebar.toggle}
                      tooltip={tooltips[category.id]}
                    />
                    {theme.sidebar.toggle &&
                      <Collapse
                        in={openRoutes[index]}
                        timeout="auto"
                        unmountOnExit
                      >
                        {category.children.map((route, index) => (
                          <SidebarLink
                            key={index}
                            name={route.name}
                            to={route.path}
                            icon={route.icon}
                            badge={route.badge}
                          />
                        ))}
                      </Collapse>
                    }
                  </React.Fragment>
                ) : category.icon ? (
                  <SidebarCategory
                    isCollapsable={false}
                    name={category.name}
                    to={category.path}
                    activeClassName="active"
                    component={NavLink}
                    icon={category.icon}
                    exact
                    button
                    sidebarToggle={theme.sidebar.toggle}
                    badge={category.badge}
                    tooltip={tooltips[category.id]}
                  />
                ) : null}
              </React.Fragment>
            ))}
          </Items>
        </List>
      </Scrollbar>
      <SidebarFooter>
        <SidebarCategory
          isCollapsable={false}
          name={accountSettingRoute.name}
          to={accountSettingRoute.path}
          activeClassName="active"
          component={NavLink}
          icon={accountSettingRoute.icon}
          exact
          button
          sidebarToggle={theme.sidebar.toggle}
          tooltip="Settings"
        />
      </SidebarFooter>
    </Drawer>
  );
};

export default withRouter(Sidebar);

const Drawer = styled(MuiDrawer)`
  border-right: 0;

  > div {
    border-right: 0;
  }
`;

const Scrollbar = styled(PerfectScrollbar)`
  background-color: ${(props) => props.theme.sidebar.background};
  border-right: 1px solid rgba(0, 0, 0, 0.12);
`;

const List = styled(MuiList)`
  background-color: ${(props) => props.theme.sidebar.background};
`;

const Items = styled.div`
  padding-top: ${(props) => props.theme.spacing(2.5)}px;
  padding-bottom: ${(props) => props.theme.spacing(2.5)}px;
`;



const Category = styled(ListItem)`
  padding-top: ${(props) => props.theme.spacing(3)}px;
  padding-bottom: ${(props) => props.theme.spacing(3)}px;
  padding-left: ${(props) => props.theme.spacing(8)}px;
  padding-right: ${(props) => props.theme.spacing(7)}px;
  font-weight: ${(props) => props.theme.typography.fontWeightRegular};

  svg {
    color: ${(props) => props.theme.sidebar.color};
    font-size: 20px;
    width: 20px;
    height: 20px;
    opacity: 0.5;
  }

  &:hover {
    background: rgba(0, 0, 0, 0.08);
  }

  &.${(props) => props.activeClassName} {
    background-color: ${(props) =>
      darken(0.03, props.theme.sidebar.background)};

    span {
      color: ${(props) => props.theme.sidebar.color};
    }
  }
`;

const CategoryText = styled(ListItemText)`
  margin: 0;
  span {
    color: ${(props) => props.theme.sidebar.color};
    font-size: ${(props) => props.theme.typography.body1.fontSize}px;
    padding: 0 ${(props) => props.theme.spacing(4)}px;
  }
`;

const CategoryIconLess = styled(ExpandLess)`
  color: ${(props) => rgba(props.theme.sidebar.color, 0.5)};
`;

const CategoryIconMore = styled(ExpandMore)`
  color: ${(props) => rgba(props.theme.sidebar.color, 0.5)};
`;

const Link = styled(ListItem)`
  padding-left: ${(props) => props.theme.spacing(17.5)}px;
  padding-top: ${(props) => props.theme.spacing(2)}px;
  padding-bottom: ${(props) => props.theme.spacing(2)}px;

  span {
    color: ${(props) => rgba(props.theme.sidebar.color, 0.7)};
  }

  &:hover span {
    color: ${(props) => rgba(props.theme.sidebar.color, 0.9)};
  }

  &:hover {
    background-color: ${(props) =>
      darken(0.015, props.theme.sidebar.background)};
  }

  &.${(props) => props.activeClassName} {
    background-color: ${(props) =>
      darken(0.03, props.theme.sidebar.background)};

    span {
      color: ${(props) => props.theme.sidebar.color};
    }
  }
`;

const LinkText = styled(ListItemText)`
  color: ${(props) => props.theme.sidebar.color};
  span {
    font-size: ${(props) => props.theme.typography.body1.fontSize}px;
  }
  margin-top: 0;
  margin-bottom: 0;
`;

const LinkBadge = styled(Chip)`
  font-size: 11px;
  font-weight: ${(props) => props.theme.typography.fontWeightBold};
  height: 20px;
  position: absolute;
  right: 28px;
  top: 8px;
  background: ${(props) => props.theme.sidebar.badge.background};

  span.MuiChip-label,
  span.MuiChip-label:hover {
    cursor: pointer;
    color: ${(props) => props.theme.sidebar.badge.color};
    padding-left: ${(props) => props.theme.spacing(2)}px;
    padding-right: ${(props) => props.theme.spacing(2)}px;
  }
`;

const CategoryBadge = styled(LinkBadge)`
  top: 12px;
`;

const SidebarSection = styled(Typography)`
  color: ${(props) => props.theme.sidebar.color};
  padding: ${(props) => props.theme.spacing(4)}px
    ${(props) => props.theme.spacing(7)}px
    ${(props) => props.theme.spacing(1)}px;
  opacity: 0.9;
  display: block;
`;

const SidebarToggler = styled(Typography)`
  color: ${(props) => props.theme.sidebar.color};
  padding-top: ${(props) => props.theme.spacing(3)}px;
  padding-bottom: ${(props) => props.theme.spacing(3)}px;
  padding-left: ${(props) => props.theme.spacing(8)}px;
  padding-right: ${(props) => props.theme.spacing(7)}px;
  opacity: 0.9;
  display: block;
`;


const SidebarFooter = styled.div`
  color: #fff;
  background-color: ${(props) =>
    props.theme.sidebar.footer.background} !important;
  border-right: 1px solid rgba(0, 0, 0, 0.12);
`;

const NavItemTooltip = withStyles({
  tooltip: {
    fontSize: '.8rem',
    width: '800px',
  }
})(Tooltip);