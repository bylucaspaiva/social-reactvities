import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import { Grid, GridColumn } from "semantic-ui-react";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import { useStore } from "../../../app/stores/store";
import ActivityFilters from "./ActivityFilters";
import ActivityList from "./ActivityList";

export default observer (function ActivityDashboard() {

  const { activityStore } = useStore();
  const {loadActivities, actitivyRegistry} = activityStore;

  useEffect(() => {
    if(actitivyRegistry.size <= 1) loadActivities();
  }, [loadActivities, actitivyRegistry.size])

  if (activityStore.loadingInitial) return <LoadingComponent content='Loading app' />

  return (
    <Grid>
      <Grid.Column width={10}>
        <ActivityList />
      </Grid.Column>
      <GridColumn width={6}>
        <ActivityFilters />
      </GridColumn>
    </Grid>

  )
}) 