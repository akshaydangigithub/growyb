import React from "react";
import { Navigate, Route, RouteProps } from "react-router-dom";

// components
import PrivateRoute from "./PrivateRoute.tsx";
import Homepage from "../screens/Homepage.jsx";
import SignIn from "../screens/admin/SignIn.jsx";
import AdminDashboard from "../screens/admin/AdminDashbord.jsx";
import VendorContact from "../screens/VendorContact.jsx";
import VendorDashboard from "../screens/VendorDashboard.jsx";
import UploadLeads from "../componentss/UploadLeads.jsx";
import Track from "../componentss/Track.jsx";
import Ongoing from "../componentss/Ongoing.jsx";
import Closed from "../componentss/Closed.jsx";
// import Root from "./Root";

// lazy load all the views

// auth
const Login = React.lazy(() => import("../pages/auth/Login.tsx"));
const Logout = React.lazy(() => import("../pages/auth/Logout.tsx"));
const Confirm = React.lazy(() => import("../pages/auth/Confirm.tsx"));
const ForgetPassword = React.lazy(() => import("../pages/auth/ForgetPassword.tsx"));
const Register = React.lazy(() => import("../pages/auth/Register.tsx"));
const LockScreen = React.lazy(() => import("../pages/auth/LockScreen.tsx"));

// landing
const Landing = React.lazy(() => import("../pages/landing/index.tsx"));

// dashboard
const EcommerceDashboard = React.lazy(
  () => import("../pages/dashboard/Ecommerce/index.tsx")
);
const AnalyticsDashboard = React.lazy(
  () => import("../pages/dashboard/Analytics/index.tsx")
);

// apps
const CalendarApp = React.lazy(() => import("../pages/apps/Calendar/index.tsx"));
const Projects = React.lazy(() => import("../pages/apps/Projects/index.tsx"));
const ProjectDetail = React.lazy(
  () => import("../pages/apps/Projects/Detail/index.tsx")
);
// - chat
const ChatApp = React.lazy(() => import("../pages/apps/Chat/index.tsx"));
// - email
const Inbox = React.lazy(() => import("../pages/apps/Email/Inbox.tsx"));
const EmailDetail = React.lazy(() => import("../pages/apps/Email/Detail.tsx"));
const EmailCompose = React.lazy(() => import("../pages/apps/Email/Compose.tsx"));
// - tasks
const TaskList = React.lazy(() => import("../pages/apps/Tasks/List/index.tsx"));
const Kanban = React.lazy(() => import("../pages/apps/Tasks/Board/index.tsx"));
// - file
const FileManager = React.lazy(() => import("../pages/apps/FileManager/index.tsx"));

// extra pages
const Error404 = React.lazy(() => import("../pages/error/Error404.tsx"));
const Error500 = React.lazy(() => import("../pages/error/Error500.tsx"));
// -other
const Starter = React.lazy(() => import("../pages/other/Starter.tsx"));
const Profile = React.lazy(() => import("../pages/other/Profile/index.tsx"));
const Activity = React.lazy(() => import("../pages/other/Activity/index.tsx"));
const Invoice = React.lazy(() => import("../pages/other/Invoice.tsx"));
const Maintenance = React.lazy(() => import("../pages/other/Maintenance.tsx"));
const Pricing = React.lazy(() => import("../pages/other/Pricing.tsx"));

// uikit
const UIElements = React.lazy(() => import("../pages/uikit/index.tsx"));

// widgets
const Widgets = React.lazy(() => import("../pages/widgets/index.tsx"));

// icons
const Unicons = React.lazy(() => import("../pages/icons/Unicons.tsx"));
const FeatherIcons = React.lazy(() => import("../pages/icons/Feather/index.tsx"));
const BootstrapIcon = React.lazy(() => import("../pages/icons/Bootstrap/index.tsx"));

// forms
const BasicForms = React.lazy(() => import("../pages/forms/Basic.tsx"));
const FormAdvanced = React.lazy(() => import("../pages/forms/Advanced.tsx"));
const FormValidation = React.lazy(() => import("../pages/forms/Validation.tsx"));
const FormWizard = React.lazy(() => import("../pages/forms/Wizard.tsx"));
const FileUpload = React.lazy(() => import("../pages/forms/FileUpload.tsx"));
const Editors = React.lazy(() => import("../pages/forms/Editors.tsx"));

// charts
const Charts = React.lazy(() => import("../pages/charts/index.tsx"));

// tables
const BasicTables = React.lazy(() => import("../pages/tables/Basic.tsx"));
const AdvancedTables = React.lazy(() => import("../pages/tables/Advanced.tsx"));

// maps
const GoogleMaps = React.lazy(() => import("../pages/maps/GoogleMaps.tsx"));
const VectorMaps = React.lazy(() => import("../pages/maps/VectorMaps.tsx"));

export interface RoutesProps {
  path: RouteProps["path"];
  name?: string;
  element?: RouteProps["element"];
  route?: any;
  exact?: boolean;
  icon?: string;
  header?: string;
  roles?: string[];
  children?: RoutesProps[];
}

// dashboards
const dashboardRoutes: RoutesProps = {
  path: "/dashboard",
  name: "Dashboards",
  icon: "airplay",
  header: "Navigation",
  children: [
    {
      path: "/",
      name: "Root",
      element: <Navigate to="/apps/calendar" />,
      route: PrivateRoute,
    },
    {
      path: "/dashboard/ecommerce",
      name: "Ecommerce",
      element: <EcommerceDashboard />,
      route: PrivateRoute,
    },
    {
      path: "/dashboard/analytics",
      name: "Analytics",
      element: <AnalyticsDashboard />,
      route: PrivateRoute,
    },
  ],
};

const calendarAppRoutes: RoutesProps = {
  path: "/apps/calendar",
  name: "Calendar",
  route: PrivateRoute,
  roles: ["Admin"],
  icon: "calendar",
  element: <CalendarApp />,
  header: "Apps",
};

const chatAppRoutes: RoutesProps = {
  path: "/apps/chat",
  name: "Chat",
  route: PrivateRoute,
  roles: ["Admin"],
  icon: "message-square",
  element: <ChatApp />,
};

const emailAppRoutes: RoutesProps = {
  path: "/apps/email",
  name: "Email",
  route: PrivateRoute,
  roles: ["Admin"],
  icon: "mail",
  children: [
    {
      path: "/apps/email/inbox",
      name: "Inbox",
      element: <Inbox />,
      route: PrivateRoute,
    },
    {
      path: "/apps/email/details",
      name: "Email Details",
      element: <EmailDetail />,
      route: PrivateRoute,
    },
    {
      path: "/apps/email/compose",
      name: "Compose Email",
      element: <EmailCompose />,
      route: PrivateRoute,
    },
  ],
};

const projectAppRoutes: RoutesProps = {
  path: "/apps/projects",
  name: "Projects",
  route: PrivateRoute,
  roles: ["Admin"],
  icon: "uil-briefcase",

  children: [
    {
      path: "/apps/projects/list",
      name: "List",
      element: <Projects />,
      route: PrivateRoute,
    },
    {
      path: "/apps/projects/details",
      name: "Detail",
      element: <ProjectDetail />,
      route: PrivateRoute,
    },
  ],
};

const taskAppRoutes: RoutesProps = {
  path: "/apps/tasks",
  name: "Tasks",
  route: PrivateRoute,
  roles: ["Admin"],
  icon: "clipboard",
  children: [
    {
      path: "/apps/tasks/list",
      name: "Task List",
      element: <TaskList />,
      route: PrivateRoute,
    },
    {
      path: "/apps/tasks/kanban",
      name: "Kanban",
      element: <Kanban />,
      route: PrivateRoute,
    },
  ],
};

const fileAppRoutes: RoutesProps = {
  path: "/apps/file-manager",
  name: "File Manager",
  route: PrivateRoute,
  roles: ["Admin"],
  icon: "folder-plus",
  element: <FileManager />,
};

const appRoutes = [
  calendarAppRoutes,
  chatAppRoutes,
  emailAppRoutes,
  projectAppRoutes,
  taskAppRoutes,
  fileAppRoutes,
];

// pages
const extrapagesRoutes: RoutesProps = {
  path: "/pages",
  name: "Pages",
  icon: "package",
  header: "Custom",
  children: [
    {
      path: "/pages/starter",
      name: "Starter",
      element: <Starter />,
      route: PrivateRoute,
    },
    {
      path: "/pages/profile",
      name: "Profile",
      element: <Profile />,
      route: PrivateRoute,
    },
    {
      path: "/pages/activity",
      name: "Activity",
      element: <Activity />,
      route: PrivateRoute,
    },
    {
      path: "/pages/invoice",
      name: "Invoice",
      element: <Invoice />,
      route: PrivateRoute,
    },
    {
      path: "/pages/pricing",
      name: "Pricing",
      element: <Pricing />,
      route: PrivateRoute,
    },
  ],
};

// ui
const uiRoutes: RoutesProps = {
  path: "/components",
  name: "Components",
  icon: "package",
  header: "UI Elements",
  children: [
    {
      path: "/components/ui-elements",
      name: "UIElements",
      element: <UIElements />,
      route: PrivateRoute,
    },
    {
      path: "/components/widgets",
      name: "Widgets",
      element: <Widgets />,
      route: PrivateRoute,
    },
    {
      path: "/icons",
      name: "Icons",
      children: [
        {
          path: "/icons/unicons",
          name: "Unicons",
          element: <Unicons />,
          route: PrivateRoute,
        },
        {
          path: "/icons/feather",
          name: "Feather",
          element: <FeatherIcons />,
          route: PrivateRoute,
        },
        {
          path: "/icons/bootstrap",
          name: "Bootstrap Icon",
          element: <BootstrapIcon />,
          route: PrivateRoute,
        },
      ],
    },
    {
      path: "/forms",
      name: "Forms",
      children: [
        {
          path: "/forms/basic",
          name: "Basic Elements",
          element: <BasicForms />,
          route: PrivateRoute,
        },
        {
          path: "/forms/advanced",
          name: "Form Advanced",
          element: <FormAdvanced />,
          route: PrivateRoute,
        },
        {
          path: "/forms/validation",
          name: "Form Validation",
          element: <FormValidation />,
          route: PrivateRoute,
        },
        {
          path: "/forms/wizard",
          name: "Form Wizard",
          element: <FormWizard />,
          route: PrivateRoute,
        },
        {
          path: "/forms/upload",
          name: "File Upload",
          element: <FileUpload />,
          route: PrivateRoute,
        },
        {
          path: "/forms/editors",
          name: "Editors",
          element: <Editors />,
          route: PrivateRoute,
        },
      ],
    },
    {
      path: "/components/charts",
      name: "Charts",
      element: <Charts />,
      route: PrivateRoute,
    },
    {
      path: "/tables",
      name: "Tables",
      children: [
        {
          path: "/tables/basic",
          name: "Basic",
          element: <BasicTables />,
          route: PrivateRoute,
        },
        {
          path: "/tables/advanced",
          name: "Advanced",
          element: <AdvancedTables />,
          route: PrivateRoute,
        },
      ],
    },
    {
      path: "/maps",
      name: "Maps",
      children: [
        {
          path: "/maps/googlemaps",
          name: "Google Maps",
          element: <GoogleMaps />,
          route: PrivateRoute,
        },
        {
          path: "/maps/vectorMaps",
          name: "Google Maps",
          element: <VectorMaps />,
          route: PrivateRoute,
        },
      ],
    },
  ],
};

// auth
const authRoutes: RoutesProps[] = [
  {
    path: "/auth/login",
    name: "Login",
    element: <Login />,
    route: Route,
  },
  {
    path: "/auth/register",
    name: "Register",
    element: <Register />,
    route: Route,
  },
  {
    path: "/auth/confirm",
    name: "Confirm",
    element: <Confirm />,
    route: Route,
  },
  {
    path: "/auth/forget-password",
    name: "Forget Password",
    element: <ForgetPassword />,
    route: Route,
  },
  // {
  //   path: "/auth/lock-screen",
  //   name: "Lock Screen",
  //   element: <LockScreen />,
  //   route: Route,
  // },
  {
    path: "/auth/logout",
    name: "Logout",
    element: <Logout />,
    route: Route,
  },
];

// public routes
const otherPublicRoutes: RoutesProps[] = [
  {
    path: "/landing",
    name: "landing",
    element: <Landing />,
    route: Route,
  },
  {
    path: "/maintenance",
    name: "Maintenance",
    element: <Maintenance />,
    route: Route,
  },
  {
    path: "/error-404",
    name: "Error - 404",
    element: <Error404 />,
    route: Route,
  },
  {
    path: "/error-500",
    name: "Error - 500",
    element: <Error500 />,
    route: Route,
  },
];

// flatten the list of all nested routes
const flattenRoutes = (routes: RoutesProps[]) => {
  let flatRoutes: RoutesProps[] = [];

  routes = routes || [];
  routes.forEach((item: RoutesProps) => {
    flatRoutes.push(item);

    if (typeof item.children !== "undefined") {
      flatRoutes = [...flatRoutes, ...flattenRoutes(item.children)];
    }
  });
  return flatRoutes;
};

// All routes
const authProtectedRoutes = [
  dashboardRoutes,
  ...appRoutes,
  extrapagesRoutes,
  uiRoutes,
];

//growYB
const growYBRoutes: RoutesProps[] = [
  {
    path: "/",
    name: "Home Page",
    element: <Homepage />,
    route: Route,
  },
  {
    path: "/admin/sign-in",
    name: "Admin Sign-In",
    element: <SignIn />,
    route: Route,
  },
  {
    path: "/vendor/login",
    name: "Vender Sign-In",
    element: <Login />,
    route: Route,
  },  
  {
    path: "/vender/register",
    name: "Vender Sign-UP",
    element: <VendorContact />,
    route: Route,
  },
  {
    path: "/admin/dashboard/allleads",
    name: "Admin Dashbord",
    element: <AdminDashboard id="allleads" />,
    route: Route,
  }, 
   {
    path: "/admin/dashboard/pending",
    name: "Admin Dashbord",
    element: <AdminDashboard id="pending" />,
    route: Route,
  },
  {
    path: "/admin/dashboard/ongoing",
    name: "Admin Dashbord",
    element: <AdminDashboard id="ongoing" />,
    route: Route,
  },  
  {
    path: "/admin/dashboard/closed",
    name: "Admin Dashbord",
    element: <AdminDashboard id="closed" />,
    route: Route,
  },  
  {
    path: "/admin/dashboard/cancel",
    name: "Admin Dashbord",
    element: <AdminDashboard id="cancel" />,
    route: Route,
  },
];

//growYB
const growYBAuthRoutes: RoutesProps[] = [
  {
    path: "/home",
    name: "Home Page",
    element: <Homepage />,
    route: Route,
  },  
  {
    path: "/vendor/dashboard/uploadLeads",
    name: "Vender Dashbord",
    element: <UploadLeads />,
    route: Route,
  },
  {
    path: "/vendor/dashboard/track",
    name: "Track Leads",
    element: <Track />,
    route: Route,
  },
  {
    path: "/vendor/dashboard/ongoing",
    name: "Track Leads",
    element: <Ongoing />,
    route: Route,
  },
  {
    path: "/vendor/dashboard/closed",
    name: "Closed Leads",
    element: <Closed />,
    route: Route,
  },
];

const publicRoutes = [...authRoutes, ...otherPublicRoutes];

const authProtectedFlattenRoutes = flattenRoutes([...authProtectedRoutes]);
const publicProtectedFlattenRoutes = flattenRoutes([...publicRoutes]);
const publicGrowYBFlattenRoutes = flattenRoutes([...growYBRoutes]);
const authGrowYBFlattenRoutes = flattenRoutes([...growYBAuthRoutes]);
export {
  publicRoutes,
  authProtectedRoutes,
  authProtectedFlattenRoutes,
  publicGrowYBFlattenRoutes,
  publicProtectedFlattenRoutes,
  authGrowYBFlattenRoutes
};
