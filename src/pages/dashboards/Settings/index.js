import React from "react"
import styled from "styled-components/macro";
import { spacing } from "@material-ui/system";
import { Link } from "react-router-dom";
import {
    Button as MuiButton,
    Container,
    Paper,
    Grid,
    Divider,
    Toolbar as MuiToolbar,
} from "@material-ui/core";
import SettingsRoutes from "../../../routes/SettingsRoutes"
import ListBox from "../../../components/Settings/List"
import TabsView from "../../../components/Settings/TabsView"

const Button = styled(MuiButton)(spacing);
const Toolbar = styled(MuiToolbar)`
    .MuiContainer-root {
        margin: 0;
    }
`
const SettingsContainer = styled(Container)`
    padding: 2rem;
    max-width: inherit;
`

const Settings = () => {
    return (
        <>
            <Toolbar>
                <Container>
                    { SettingsRoutes.map((route, key) => (
                            <Button
                                key={key}
                                ml={2}
                                color="inherit"
                                component={Link}
                                to={route.path}
                            >
                                {route.name}
                            </Button>
                        ))
                    }
                </Container>
            </Toolbar>
            <Divider />
            <SettingsContainer>
                <Grid container spacing={6}>
                    <Grid item xs={12} lg={4} xl={3}>
                        <ListBox
                            title="Groups"
                            items={[
                                "Mapper Groups"
                            ]}
                        />
                        <ListBox 
                            title="Initiatives"
                            items={[
                                "PCI"
                            ]}
                        />
                        <ListBox 
                            title="Teams"
                            items={[
                                "Regulartory",
                                "Dictionary"
                            ]}
                        />
                    </Grid>
                    <Grid item xs={12} lg={8} xl={9}>
                        <TabsView />
                    </Grid>
                </Grid>
            </SettingsContainer>
        </>
    )
}

export default Settings