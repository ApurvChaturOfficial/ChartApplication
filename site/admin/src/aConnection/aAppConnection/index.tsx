import React from "react"
import { Helmet } from "react-helmet-async";
import { Route, Routes } from "react-router-dom";

import { Toaster } from "../bShadcnConnection/components/ui/toaster";

import endpointRoute from "@/bLove/gRoute/aEndpointRoute";

// Component
import PageNotFoundComponent from "@/bLove/cComponent/zSampleComponent/component/aPageNotFoundComponent";
import LoaderComponent from "@/bLove/cComponent/zSampleComponent/component/bLoaderComponent";
import NoInternetConnectionComponent from "@/bLove/cComponent/zSampleComponent/component/cNoInternetConnectionComponent";

import AreaChartListComponent from "@/bLove/cComponent/zSampleComponent/component/dChartComponent/aAreaChartListComponent";
import BarChartListComponent from "@/bLove/cComponent/zSampleComponent/component/dChartComponent/bBarChartListComponent";
import LineChartListComponent from "@/bLove/cComponent/zSampleComponent/component/dChartComponent/cLineChartListComponent";
import PieChartListComponent from "@/bLove/cComponent/zSampleComponent/component/dChartComponent/dPieChartListComponent";
import RadarChartListComponent from "@/bLove/cComponent/zSampleComponent/component/dChartComponent/eRadarChartListComponent";
import RadialChartListComponent from "@/bLove/cComponent/zSampleComponent/component/dChartComponent/fRadialChartListComponent";
import TooltipListComponent from "@/bLove/cComponent/zSampleComponent/component/dChartComponent/gTooltipListComponent";
import DashboardOneComponent from "@/bLove/cComponent/zSampleComponent/component/eDashboardComponent/aDashboardOneComponent";

// Layout
const GlobalLayout = React.lazy(() => import("@/bLove/eLayout/aGlobalLayout"));
const UnprotectedLayout = React.lazy(() => import("@/bLove/eLayout/aGlobalLayout/outlet/aUnprotectedLayout"));
const ProtectedLayout = React.lazy(() => import("@/bLove/eLayout/aGlobalLayout/outlet/bProtectedLayout"));
const AuthenticatedLayout = React.lazy(() => import("@/bLove/eLayout/aGlobalLayout/outlet/bProtectedLayout/outlet/aAuthenticatedLayout"));
const AuthorizedLayout = React.lazy(() => import("@/bLove/eLayout/aGlobalLayout/outlet/bProtectedLayout/outlet/bAuthorizedLayout"));
const TopbarLayout = React.lazy(() => import("@/bLove/eLayout/aGlobalLayout/outlet/bProtectedLayout/outlet/bAuthorizedLayout/outlet/aTopbarLayout"));
const SidebarLayout = React.lazy(() => import("@/bLove/eLayout/aGlobalLayout/outlet/bProtectedLayout/outlet/bAuthorizedLayout/outlet/bSidebarLayout"));

// Pages
const BaseListPage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/aSettingPage/aBasePage/aListPage"));
const BaseCreatePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/aSettingPage/aBasePage/bCreatePage"));
const BaseRetrievePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/aSettingPage/aBasePage/cRetrievePage"));
const BaseUpdatePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/aSettingPage/aBasePage/dUpdatePage"));
const BaseDeletePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/aSettingPage/aBasePage/eDeletePage"));


const AppConnection = () => {
  // JSX
  return (
    <React.Fragment>
      {/* AppConnection */}
      
      <Helmet><title>Chart Application</title></Helmet>
      <Toaster />

      <Routes>
        <Route element={<GlobalLayout />} >
          <Route element={<UnprotectedLayout />} ></Route>
          <Route element={<ProtectedLayout />} >
            <Route element={<AuthenticatedLayout />} ></Route>
            <Route element={<AuthorizedLayout />} >
              <Route element={<TopbarLayout />} ></Route>
              <Route element={<SidebarLayout />} >
                {/* Base Page */}
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.aSettingRoute.aBaseRoute.aListRoute}`} element={<BaseListPage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.aSettingRoute.aBaseRoute.bCreateRoute}`} element={<BaseCreatePage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.aSettingRoute.aBaseRoute.cRetrieveRoute}/:id`} element={<BaseRetrievePage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.aSettingRoute.aBaseRoute.dUpdateRoute}/:id`} element={<BaseUpdatePage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.aSettingRoute.aBaseRoute.eDeleteRoute}/:id`} element={<BaseDeletePage />} />

                {/* Components */}
                <Route path="/" element={<DashboardOneComponent />} />

                <Route path="/area-chart" element={<AreaChartListComponent />} />
                <Route path="/bar-chart" element={<BarChartListComponent />} />
                <Route path="/line-chart" element={<LineChartListComponent />} />
                <Route path="/pie-chart" element={<PieChartListComponent />} />
                <Route path="/radar-chart" element={<RadarChartListComponent />} />
                <Route path="/radial-chart" element={<RadialChartListComponent />} />
                <Route path="/tooltip" element={<TooltipListComponent />} />
              </Route>
            </Route>
          </Route>
        </Route>

        
        <Route path="/loader" element={<LoaderComponent />} />
        <Route path="/no-internet-connection" element={<NoInternetConnectionComponent />} />
        <Route path="*" element={<PageNotFoundComponent />} />
      </Routes>

    </React.Fragment>
  )
}

export default AppConnection;
