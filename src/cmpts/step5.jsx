import React, { Component } from 'react';
import Plot from 'react-plotly.js';
import FeedbackList from './FeedbackList';

import { withStyles } from '@material-ui/core/styles';

import SwipeableViews from 'react-swipeable-views';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';


class BarGraph extends Component{
    render(){
        return(
            <div>
                <Plot
                    data={[
                        {
                            type: 'bar',
                            x: [1, 2, 3],
                            y: [2, 5, 3]
                        }
                    ]}
                    layout={{
                        //width: 320,
                        //height: 240,
                        title: 'How much time would you spend on a mission on average?',
                        subTitle : 'In minutes'
                    }}
                />
            </div>
        );
    }
}

function TabContainer({ children, dir }) {
    return (
        <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
            {children}
        </Typography>
    );
}

let feedbacks = [
    {
        text: "Hello",
        score: 3.5
    },
    {
        text: "Hello2",
        score: 1
    }
];

class Step5_STAR extends Component{
    state = {
        value: 1,
    };
    handleChange = (event, value) => {
        this.setState({ value });
    };
    handleChangeIndex = index => {
        this.setState({ value: index });
    };
    render(){
        const { classes, theme } = this.props;
        return(
            <div className="view">
                <div className="row">
                    <div className="col s12">
                        <BarGraph></BarGraph>
                    </div>
                    <div className="col s12">
                        <Paper>
                            <Tabs value={this.state.value}
                                  indicatorColor="primary"
                                  textColor="primary"
                                  onChange={this.handleChange}
                                  centered
                            >
                                <Tab label="Unrateds"></Tab>
                                <Tab label="Rateds"></Tab>
                            </Tabs>
                        </Paper>
                        <SwipeableViews
                            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                            index={this.state.value}
                            onChangeIndex={this.handleChangeIndex}
                        >
                            <TabContainer dir={theme.direction}>
                                <FeedbackList data={feedbacks}>
                                </FeedbackList>
                            </TabContainer>
                            <TabContainer dir={theme.direction}>
                                <FeedbackList data={feedbacks} frozen={true}>
                                </FeedbackList>
                            </TabContainer>
                        </SwipeableViews>
                    </div>
                </div>
            </div>
        );
    }
}


const styles = theme => ({
    root: {
        backgroundColor: theme.palette.background.paper,
        width: 500,
    },
});

export default withStyles(styles, { withTheme: true })(Step5_STAR);
