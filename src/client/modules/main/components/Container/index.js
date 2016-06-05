import React from 'react';
import Slider from 'react-slick';

import Header from '../Header';
import Navigation from '../Navigation';
import TopicCard from '../TopicCard';
import Footer from '../Footer';


import './style.scss';

const Container = React.createClass({
  _getSliderSettings() {
    return {
      dots: false,
      speed: 500,
      centerMode: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      slickGoTo: this.props.activeTopic,
      infinite: false,
      lazyLoad: true,
    };
  },

  _renderTopicCard(topic, index) {
    return (
      <div key={index}>
        <TopicCard topic={topic} />
      </div>
    );
  },

  render() {
    let settings = this._getSliderSettings();
    return (
      <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
        <Header
          title={this.props.title}
          subTopicIndexs={this.props.subTopicIndexs} />
        <Navigation title={this.props.title} />
        <main className="mdl-layout__content">
          <div className='topic-card__container'>
            <Slider {...settings}>
              {
                this.props.subTopics.map(
                  (topic, index) => this._renderTopicCard(topic, index)
                )
              }
            </Slider>
          </div>
          <div className='mdl-tabs__panel' id='top'></div>
          <Footer />
        </main>
      </div>
    );
  },
});

export default Container;
