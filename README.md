[![npm](https://img.shields.io/npm/v/react-weathericons.svg)](https://www.npmjs.com/package/react-weathericons)
[![Build Status](https://travis-ci.org/lucaskatayama/react-weathericons.svg?branch=master)](https://travis-ci.org/lucaskatayama/react-weathericons)
[![codecov](https://codecov.io/gh/lucaskatayama/react-weathericons/branch/master/graph/badge.svg)](https://codecov.io/gh/lucaskatayama/react-weathericons)

# React Weather Icons

React component for [WeatherIcons](http://weathericons.io/) icons

# Installation

```
$ npm install --save react-weathericons
```

## Important
 You need to add your own version of Weather Icons CSS.

# Usage

```javascript
import React from 'react';
import WeatherIcons from 'react-weathericons';

const Component = (props) => {
  return (
    <div>
      <WeatherIcons name="cloud" size="2x" />
    </div>
  )
}
```

# Features

- FontAwesome size like (e.g. lg, 2x, 3x)


# Inspiration
This module was inspired on [`react-fontawesome`](https://github.com/danawoodman/react-fontawesome) module, but using WeatherIcons icons.
