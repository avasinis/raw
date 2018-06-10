import React, { Component } from 'react';
import Plot from 'react-plotly.js';
import FeedbackList from './FeedbackList';

import { withStyles } from '@material-ui/core/styles';

import SwipeableViews from 'react-swipeable-views';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';


class PieGraph extends Component{
    render(){
        return(
            <Plot
                data={[
                    {type: 'pie', values: [86, 14], labels: ['Yes', 'No']},
                ]}
                layout={{title: 'Do you have this problem ?'}}
            />
        );
    }
}

class BarGraph extends Component{
    render(){
        return(
            <div>
                <Plot
                    data={[
                        {
                            type: 'bar',
                            x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
                            y: [1, 1, 1, 2, 10, 7, 6, 6, 5, 15, 13, 13, 2, 2, 27, 20, 21, 19, 20, 27, 7, 18, 17, 24, 0, 0,  12]
                        }
                    ]}
                    layout={{
                        //width: 320,
                        //height: 240,
                        title: 'How much time are you spending helping other entrepreneurs online <br> on a dayli basis?'
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

const feedbacks = [
    {
        text: "They are moving Humanity forward. I want to help to create jobs and make an impact. Especially to fight climate change. I think it's a big issue. Politics should get involved more and help social entrepreneurs."
    },
    {
        text: "Well, watch this https://www.youtube.com/watch?v=w_UNrKxPWk4 you will understand my view..."
    },
    {
        text: "When we began Virgin, I didn't see it as an end in itself, a noun; I saw it as the beginning of a whole range of services, an adjective. Successful entrepreneurs take an idea and let it fly"
    },
    {
        text: "Because they need help..."
    },
    {
        text: "I don't believe that old cliche that good things come to those who wait. I think good things come to those who want something so bad they can't sit still. I want to help those people."
    },
    {
        text: "I would prefer helping others. I met a lot of entrepreneurs. They don't need help. They just need freedom."
    },
    {
        text: "They are solving problems. Look, we have many..."
    },
    {
        text: "I want to help female entrepreneur. To get rid of the gender inequality. Especially when it comes to get funded. Raising funds for a female entrepreneur is much harder than for a male entrepreneur. Which is not acceptable!"
    },
    {
        text: "I created The Honest Company to help moms and to give all children a better, safer start. Entrepreneurship is about finding solutions to problems. There are a lot of problems waiting for being solved. Helping entrepreneurs that is moving things forward."
    },
    {
        text: "Entrepreneurship: you put one dumb foot in front of the other while the world throws bricks at your head. Want to help them."
    },
    {
        text: "I actually think entrepreneurs are good to find solutions to problems by themseleves. They don't need much help. They figure things out. This is how you differentiate a good entrepreneur to a bad one."
    },
    {
        text: "Everybody has a calling. And your real job in life is to figure out as soon as possible what that is, who you were meant to be, and to begin to honor that in the best way possible for yourself. The key to realizing a dream is to focus not on success but on significance -- and then even the small steps and little victories along your path will take on greater meaning. Create the highest, grandest vision possible for your life, because you become what you believe. You have to know what sparks the light in you so that you, in your own way, can illuminate the world"
    }
];

class Step5_STAR extends Component{
    state = {
        value: 0,
        feedbacks : feedbacks
    };
    handleChange = (event, value) => {
        this.setState({value: value});
    };
    handleChangeIndex = index => {
        this.setState({ value: index });
    };
    getProgress(){
        let scores = this.state.feedbacks .map((f)=> f.score);
        var nbRateds = 0;
        for(var i = 0; i < scores.length; i++){
            if(scores[i]){
                nbRateds++;
            }
        }
        let cnt = this.state.feedbacks.length || 1;
        console.log(nbRateds , cnt);
        return (nbRateds / cnt ) * 100;
    }
    setScore(index, score){
        var fbacks = this.state.feedbacks;
        fbacks[index].score = score;
        this.setState({feedbacks : feedbacks})
    }
    render(){
        const { classes, theme } = this.props;
        return(
            <div className="view">
                <div className="row">
                    <div className="col s12">
                        <PieGraph></PieGraph>
                    </div>
                    <div className="col s12">
                        <BarGraph></BarGraph>
                    </div>
                    <div className="col s12">
                        <div className="title">
                            What do you think?
                        </div>
                        <Paper style={{width: "100%", position : "relative"}}>
                            <div key={this.state.feedbacks} className="completion" style={{
                                width:  Math.floor(this.getProgress()) + "%",
                                position: "absolute",
                                height: 48,
                                background: "linear-gradient(141deg,#2cb5e8 0,#1fc8db 51%,#1ce2d5 75%)",
                                transition: "0.4s ease width"
                            }}>
                            </div>
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
                                <FeedbackList data={feedbacks} onRate={(idx,score)=> this.setScore(idx, score)}>
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
