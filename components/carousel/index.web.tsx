import React from 'react';
import classNames from 'classnames';
import ReactCarousel from 'nuka-carousel';
import assign from 'object-assign';
import CarouselProps from './PropsType';

export default class Carousel extends React.Component<CarouselProps, any> {
  static defaultProps = {
    prefixCls: 'am-carousel',
    dots: true,
    arrows: false,
    autoplay: false,
    infinite: false,
    edgeEasing: 'linear',
    cellAlign: 'center',
    selectedIndex: 0,
  };

  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: this.props.selectedIndex,
    };
  }

  onChange = (index) => {
    this.setState({ selectedIndex: index });
  }

  render() {
    const { className, prefixCls } = this.props;
    let props = assign({}, this.props);
    props = assign(props, {
      wrapAround: props.infinite,
      slideIndex: props.selectedIndex,
      beforeSlide: props.beforeChange,
      afterSlide: props.afterChange,
    });

    let Decorators: any[] = [];
    const current = this.state.selectedIndex;
    if (props.dots) {
      Decorators = [{
        component: React.createClass({
          render() {
            const { slideCount, slidesToScroll } = this.props;
            const arr: number[] = [];
            for (let i = 0; i < slideCount; i += slidesToScroll) {
              arr.push(i);
            }
            return (
              <div className={`${prefixCls}-wrap`}>
                {
                  arr.map(function(index) {
                    const dotCls = classNames({
                      [`${prefixCls}-wrap-dot`]: true,
                      [`${prefixCls}-wrap-dot-active`]: index === current,
                    });
                    return (
                      <div className={dotCls} key={index}>
                        <span></span>
                      </div>
                    );
                  })
                }
              </div>
            );
          },
        }),
        position: 'BottomCenter',
      }];
    }

    ['infinite', 'selectedIndex', 'beforeChange', 'afterChange', 'dots'].forEach(prop => {
      if (props.hasOwnProperty(prop)) {
        delete props[prop];
      }
    });

    return (
      <div className={classNames({
        [className as string]: className,
        [prefixCls as string]: true,
        [`${prefixCls}-vertical`]: props.vertical,
      })}
      >
        <ReactCarousel
          {...props}
          decorators={Decorators}
          afterSlide={this.onChange}
        />
      </div>
    );
  }
}
