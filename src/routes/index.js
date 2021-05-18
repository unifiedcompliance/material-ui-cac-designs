import React from "react";

import async from "../components/Async";

import {
  ListAlt,
  Settings,
} from "@material-ui/icons"

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
const HomePage = async(() => import("../pages/dashboards/Homepage"));
const SettingsPage = async(() => import("../pages/dashboards/Settings"));

// Protected routes
const ProtectedPage = async(() => import("../pages/protected/ProtectedPage"));

export const accountSettingRoute = {
  id: "account-settings",
  name: "Account Settings",
  path: "/account-settings",
  icon: <Settings />,
  component: SettingsPage,
};

const homePageRoutes = {
  id: "HomePage",
  path: "/",
  component: HomePage,
};

const personnelRoutes = {
  id: "personnel",
  name: "Personnel",
  path: "/personnel",
  icon: <User />,
  children: [
    {
      path: "/personnel/menu-1",
      name: "Child Menu 1",
      component: Default,
      guard: AuthGuard,
    },
  ],
  component: null,
};

const organizationsRoutes = {
  id: "organizations-activities",
  name: "Organizations Activities",
  path: "/organizations-activities",
  icon: <Users />,
  children: [
    {
      path: "/organizations-activities/organizations",
      name: "Organizations",
      component: Default,
      guard: AuthGuard,
    },
    {
      path: "/organizations-activities/groups",
      name: "Groups",
      component: Default,
      guard: AuthGuard,
    },
    {
      path: "/organizations-activities/Initiatives",
      name: "Initiatives",
      component: Default,
      guard: AuthGuard,
    },
  ],
  component: null,
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
  homePageRoutes,
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
