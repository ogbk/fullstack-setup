/* eslint-disable */

import React from 'react';
import { shallow, mount, render } from 'enzyme';
import App from '../../client/app/components/App';
import Profile from '../../client/app/components/Profile';
import NotFound from '../../client/app/components/NotFound';
import searchList from '../../client/app/components/utils/search.json';

let app;

describe('<App/>', () => {

  beforeAll(() => {
    app = mount(<App />);
  });

  test('on mount, contains search bar [text, select field, submit button]', () => {
    expect(app.find('form').children()).toHaveLength(3);
    expect(app.find('form').childAt(0).type()).toEqual('span');
    expect(app.find('form').childAt(0).text()).toEqual('Find karate champion: ');

    expect(app.find('form').childAt(1).type()).toEqual('select');

    expect(app.find('form').childAt(2).type()).toEqual('button');
    expect(app.find('form').childAt(2).prop('type')).toEqual('submit');

  });

  test('select field: loads from searchList', () => {
    expect (searchList.length).toBe(3);

    expect(app.find('form').childAt(1).type()).toEqual('select');
    expect(app.find('form').childAt(1).children()).toHaveLength(3);
    expect(app.find('form').childAt(1).childAt(0).text()).toMatch(searchList[0].name);
    expect(app.find('form').childAt(1).childAt(1).text()).toMatch(searchList[1].name);
    expect(app.find('form').childAt(1).childAt(2).text()).toMatch(searchList[2].name);

  });

  test('on mount, does not load <Profile/> or <NotFound/>', () => {
    expect(app.find(Profile).exists()).toBe(false);
    expect(app.find(Profile).exists()).not.toBe(true);

    expect(app.find(NotFound).exists()).toBe(false);
    expect(app.find(NotFound).exists()).not.toBe(true);

  });

})
