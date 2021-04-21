import React from "react";

import async from "../components/Async";

import { ListAlt } from "@material-ui/icons"

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

// Protected routes
const ProtectedPage = async(() => import("../pages/protected/ProtectedPage"));

const homePageRoutes = {
  id: "HomePage",
  path: "/",
  component: HomePage,
};

const personnelRoutes = {
  id: "personnel",
  path: "/personnel",
  icon: <User />,
  children: [
    {
      path: "/personnel/menu-1",
      name: "Child Menu 1",
      component: Default,
    },
  ],
  component: null,
};

const organizationsRoutes = {
  id: "organizations-activities",
  path: "/organizations-activities",
  icon: <Users />,
  children: [
    {
      path: "/organizations-activities/organizations",
      name: "Organizations",
      component: Default,
    },
    {
      path: "/organizations-activities/groups",
      name: "Groups",
      component: Default,
    },
    {
      path: "/organizations-activities/Initiatives",
      name: "Initiatives",
      component: Default,
    },
  ],
  component: null,
};

const authorityDocumentsRoutes = {
  id: "authority-documents",
  path: "/authority-documents",
  icon: <FileText />,
  component: Default,
};

const dictionaryRoutes = {
  id: "dictionary",
  path: "/dictionary",
  icon: <Book />,
  component: Default,
};

const citationsRoutes = {
  id: "citations",
  path: "/citations",
  icon: <List />,
  component: Default,
};

const commonControlsRoutes = {
  id: "common-controls",
  path: "/common-controls",
  icon: <ListAlt />,
  children: [
    {
      path: "/common-controls/menu-1",
      name: "Child Menu 1",
      component: Default,
    },
  ],
  component: null,
};

const assetsConfigRoutes = {
  id: "assets-config",
  path: "/assets-config",
  icon: <Monitor />,
  children: [
    {
      path: "/assets-config/menu-1",
      name: "Child Menu 1",
      component: Default,
    },
  ],
  component: null,
};

const recordsRoutes = {
  id: "records",
  path: "/records",
  icon: <Folder />,
  children: [
    {
      path: "/records/menu-1",
      name: "Child Menu 1",
      component: Default,
    },
  ],
  component: null,
};

const eventsRoutes = {
  id: "events",
  path: "/events",
  icon: <Calendar />,
  children: [
    {
      path: "/events/menu-1",
      name: "Child Menu 1",
      component: Default,
    },
  ],
  component: null,
};


const corporaRoutes = {
  id: "corpora",
  path: "/corpora",
  icon: <BookOpen />,
  children: [
    {
      path: "/corpora/menu-1",
      name: "Child Menu 1",
      component: Default,
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
