import React from "react";

import async from "../components/Async";

import { ListAlt, Settings } from "@material-ui/icons";

import {
  Book,
  User,
  Users,
  FileText,
  List,
  Monitor,
  Folder,
  Calendar,
  BookOpen,
} from "react-feather";

// Guards
const AuthGuard = async(() => import("../components/AuthGuard"));

// Auth components
const SignIn = async(() => import("../pages/auth/SignIn"));
const SignUp = async(() => import("../pages/auth/SignUp"));
const ResetPassword = async(() => import("../pages/auth/ResetPassword"));
const Page404 = async(() => import("../pages/auth/Page404"));
const Page500 = async(() => import("../pages/auth/Page500"));

// Dashboards components
const Default = async(() => import("../pages/dashboards/Default"));
const Personnel = async(() =>
  import("../pages/dashboards/Personnel/Contributors")
);
const PersonnelIntrest = async(() =>
  import("../pages/dashboards/Personnel/Intrest")
);
const Organization = async(() =>
  import("../pages/dashboards/Organizations/Organization")
);
const OrganizationGroup = async(() =>
  import("../pages/dashboards/Organizations/Groups")
);
const HomePage = async(() => import("../pages/dashboards/Homepage"));
const SettingsAccountPage = async(() =>
  import("../pages/dashboards/Settings/Account")
);
const SettingsAccountGroupsPage = async(() =>
  import("../pages/dashboards/Settings/AccountGroups")
);
const SettingsAccountInitiativesPage = async(() =>
  import("../pages/dashboards/Settings/AccountInitiatives")
);
const SettingsAccountTeamsPage = async(() =>
  import("../pages/dashboards/Settings/AccountTeams")
);
const SettingsAccountUsersPage = async(() =>
  import("../pages/dashboards/Settings/AccountUsers")
);
const SettingsOtherPage = async(() =>
  import("../pages/dashboards/Settings/Other")
);
const SettingsReportsPage = async(() =>
  import("../pages/dashboards/Settings/Reports")
);
// Protected routes
const ProtectedPage = async(() => import("../pages/protected/ProtectedPage"));

export const accountSettingRoute = {
  id: "account-settings",
  name: "Account Settings",
  path: "/settings/account",
  icon: <Settings />,
  component: SettingsAccountPage,
  guard: AuthGuard,
};

const accountGroupsSettingRoute = {
  id: "account-groups-settings",
  name: "Account Groups Settings",
  path: "/settings/account-groups",
  component: SettingsAccountGroupsPage,
  guard: AuthGuard,
};

const accountInitiativesSettingRoute = {
  id: "account-initiatives-settings",
  name: "Account Initiatives Settings",
  path: "/settings/account-initiatives",
  component: SettingsAccountInitiativesPage,
  guard: AuthGuard,
};

const accountTeamsSettingRoute = {
  id: "account-teams-settings",
  name: "Account Teams Settings",
  path: "/settings/account-teams",
  component: SettingsAccountTeamsPage,
  guard: AuthGuard,
};
const accountUsersSettingRoute = {
  id: "account-users-settings",
  name: "Account Users Settings",
  path: "/settings/account-users",
  component: SettingsAccountUsersPage,
  guard: AuthGuard,
};
const otherSettingRoute = {
  id: "other-settings",
  name: "Other Settings",
  path: "/settings/other-settings",
  component: SettingsOtherPage,
  guard: AuthGuard,
};

const reportSettingRoute = {
  id: "report",
  name: "Report",
  path: "/settings/reports",
  component: SettingsReportsPage,
  guard: AuthGuard,
};

const homePageRoutes = {
  id: "HomePage",
  path: "/",
  component: HomePage,
};

const personnelRoutes = {
  id: "personnel",
  name: "Personnel",
  path: "/personnel/contributors",
  icon: <User />,
  // children: [
  //   {
  //     path: "/personnel/menu-1",
  //     name: "Child Menu 1",
  //     component: Default,
  //     guard: AuthGuard,
  //   },
  // ],
  component: Personnel,
};
const personnelIntrestRoutes = {
  id: "personnel",
  name: "Personnel",
  path: "/personnel/interest",
  icon: <User />,
  component: PersonnelIntrest,
};

const organizationsRoutes = {
  id: "organizations-activities",
  name: "Organizations Activities",
  path: "/organizations-activities/organizations",
  icon: <Users />,
  component: Organization,
  guard: AuthGuard,
  // children: [
  //   {
  //     path: "/organizations-activities/organizations",
  //     name: "Organizations",
  //     component: Organization,
  //     guard: AuthGuard,
  //   },
  //   {
  //     path: "/organizations-activities/groups",
  //     name: "Groups",
  //     component: OrganizationGroup,
  //     guard: AuthGuard,
  //   },
  //   {
  //     path: "/organizations-activities/Initiatives",
  //     name: "Initiatives",
  //     component: Default,
  //     guard: AuthGuard,
  //   },
  // ],
};
const organizationsGroups = {
  id: "organizations-groups",
  name: "Organizations Groups",
  path: "/organizations-activities/groups",
  component: OrganizationGroup,
  guard: AuthGuard,
};

const authorityDocumentsRoutes = {
  id: "authority-documents",
  name: "Authority Documents",
  path: "/authority-documents",
  icon: <FileText />,
  component: Default,
  guard: AuthGuard,
};

const dictionaryRoutes = {
  id: "dictionary",
  name: "Dictionary",
  path: "/dictionary",
  icon: <Book />,
  component: Default,
  guard: AuthGuard,
};

const citationsRoutes = {
  id: "citations",
  name: "Citations",
  path: "/citations",
  icon: <List />,
  component: Default,
  guard: AuthGuard,
};

const commonControlsRoutes = {
  id: "common-controls",
  name: "Common Controls",
  path: "/common-controls",
  icon: <ListAlt />,
  children: [
    {
      path: "/common-controls/menu-1",
      name: "Child Menu 1",
      component: Default,
      guard: AuthGuard,
    },
  ],
  component: null,
};

const assetsConfigRoutes = {
  id: "assets-config",
  name: "Assets Config",
  path: "/assets-config",
  icon: <Monitor />,
  children: [
    {
      path: "/assets-config/menu-1",
      name: "Child Menu 1",
      component: Default,
      guard: AuthGuard,
    },
  ],
  component: null,
};

const recordsRoutes = {
  id: "records",
  name: "Records",
  path: "/records",
  icon: <Folder />,
  children: [
    {
      path: "/records/menu-1",
      name: "Child Menu 1",
      component: Default,
      guard: AuthGuard,
    },
  ],
  component: null,
};

const eventsRoutes = {
  id: "events",
  name: "Events",
  path: "/events",
  icon: <Calendar />,
  children: [
    {
      path: "/events/menu-1",
      name: "Child Menu 1",
      component: Default,
      guard: AuthGuard,
    },
  ],
  component: null,
};

const corporaRoutes = {
  id: "corpora",
  name: "Corpora",
  path: "/corpora",
  icon: <BookOpen />,
  children: [
    {
      path: "/corpora/menu-1",
      name: "Child Menu 1",
      component: Default,
      guard: AuthGuard,
    },
  ],
  component: null,
};

const authRoutes = {
  id: "Auth",
  path: "/auth",
  icon: <Users />,
  children: [
    {
      path: "/auth/sign-in",
      name: "Sign In",
      component: SignIn,
    },
    {
      path: "/auth/sign-up",
      name: "Sign Up",
      component: SignUp,
    },
    {
      path: "/auth/reset-password",
      name: "Reset Password",
      component: ResetPassword,
    },
    {
      path: "/auth/404",
      name: "404 Page",
      component: Page404,
    },
    {
      path: "/auth/500",
      name: "500 Page",
      component: Page500,
    },
  ],
  component: null,
};

// This route is only visible while signed in
const protectedPageRoutes = {
  id: "Private",
  path: "/private",
  component: ProtectedPage,
  children: null,
  guard: AuthGuard,
};

// Routes using the Dashboard layout
export const dashboardLayoutRoutes = [
  accountSettingRoute,
  accountGroupsSettingRoute,
  accountInitiativesSettingRoute,
  accountTeamsSettingRoute,
  accountUsersSettingRoute,
  otherSettingRoute,
  reportSettingRoute,
  homePageRoutes,
  personnelRoutes,
  personnelIntrestRoutes,
  organizationsRoutes,
  organizationsGroups,
  authorityDocumentsRoutes,
  dictionaryRoutes,
  citationsRoutes,
  commonControlsRoutes,
  assetsConfigRoutes,
  recordsRoutes,
  eventsRoutes,
  corporaRoutes,
];

// Routes using the Auth layout
export const authLayoutRoutes = [authRoutes];

// Routes that are protected
export const protectedRoutes = [protectedPageRoutes];

// Routes visible in the sidebar
export const sidebarRoutes = [
  personnelRoutes,
  organizationsRoutes,
  authorityDocumentsRoutes,
  dictionaryRoutes,
  citationsRoutes,
  commonControlsRoutes,
  assetsConfigRoutes,
  recordsRoutes,
  eventsRoutes,
  corporaRoutes,
];
