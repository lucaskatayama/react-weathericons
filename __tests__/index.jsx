import React from 'react';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { shallow } from 'enzyme';
import WeatherIcons from '../src';

Error.stackTraceLimit = 10;
chai.use(chaiEnzyme());

const { expect } = chai;

describe('React Weather Icons', () => {
  describe('Basic className', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = shallow(<WeatherIcons name="cloud" />);
    });
    it('should have class "wi"', () => {
      expect(wrapper).to.have.className('wi');
    });
    it('should have class "wi-cloud" when name "cloud" is given', () => {
      expect(wrapper).to.have.className('wi-cloud');
    });
  });
  describe('Size', () => {
    it('should add font-size 1.33333333em when size "lg" is given', () => {
      const wrapper = shallow(<WeatherIcons name="cloud" size="lg" />);
      expect(wrapper).to.have.style('font-size', '1.33333333em');
    });
    it('should add font-size 2em when size "2x" is given', () => {
      const wrapper = shallow(<WeatherIcons name="cloud" size="2x" />);
      expect(wrapper).to.have.style('font-size', '2em');
    });
    it('should add font-size 3em when size "3x" is given', () => {
      const wrapper = shallow(<WeatherIcons name="cloud" size="3x" />);
      expect(wrapper).to.have.style('font-size', '3em');
    });
    it('should add font-size 4em when size "4x" is given', () => {
      const wrapper = shallow(<WeatherIcons name="cloud" size="4x" />);
      expect(wrapper).to.have.style('font-size', '4em');
    });
    it('should add font-size 5em when size "5x" is given', () => {
      const wrapper = shallow(<WeatherIcons name="cloud" size="5x" />);
      expect(wrapper).to.have.style('font-size', '5em');
    });
  });
});
