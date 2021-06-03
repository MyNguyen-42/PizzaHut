import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {getCategoryRequest} from '../../Container/Category/Category.Action';

const Nav = () => {
  const dispatch = useDispatch();
  const handleLoadCategory = () => dispatch(getCategoryRequest());
  return (
    <TouchableOpacity onPress={handleLoadCategory}>
      <Text>Get Category</Text>
    </TouchableOpacity>
  );
};

export default Nav;

const styles = StyleSheet.create({});
