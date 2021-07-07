import React from "react";
import { Grid } from "@material-ui/core";

import MemberTable from "./MembersTable";

const Members = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12} sm={12}>
          <p>Click the <strong>name</strong> of one of the users to navigate to that user's record.</p>
        <MemberTable />
      </Grid>
     
    </Grid>
  );
};

export default Members;
