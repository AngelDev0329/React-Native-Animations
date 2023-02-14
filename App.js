/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import Slider from './src/slider/slider';
import WhatsappHeader from './src/whatsAppSearch';
import SwipeToDelete from './src/swipeToDelete';
import BkashPayment from './src/bKashPayment';
import AddToCart from './src/addToCart';
import ProductPage from './src/addToCart/productPage';
import DeleteChat from './src/chatDelete';
import GoogleCalendar from './src/googleCalendar';
import Youtube from './src/youtube';
import {View, Text, Pressable, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import PullToRefresh from './src/pullToRefresh';

global.__reanimatedWorkletInit = () => {};

const AnimationComponents = [
  'Slider',
  'Whatsapp Header',
  'Swipe To Delete',
  'Bkash Payment',
  'Product Page',
  'Delete Chat',
  'Google Calendar',
  'Pull to Refresh',
];

const App = () => {
  const [selectedTopic, setSelectedTopic] = React.useState(null);

  if (selectedTopic) {
    switch (selectedTopic) {
      case 'Slider':
        return <Slider closeComponent={() => setSelectedTopic(null)} />;
      case 'Whatsapp Header':
        return <WhatsappHeader closeComponent={() => setSelectedTopic(null)} />;
      case 'Swipe To Delete':
        return <SwipeToDelete closeComponent={() => setSelectedTopic(null)} />;
      case 'Bkash Payment':
        return <BkashPayment closeComponent={() => setSelectedTopic(null)} />;
      case 'Product Page':
        return <ProductPage closeComponent={() => setSelectedTopic(null)} />;
      case 'Delete Chat':
        return <DeleteChat closeComponent={() => setSelectedTopic(null)} />;
      case 'Google Calendar':
        return <GoogleCalendar closeComponent={() => setSelectedTopic(null)} />;
      case 'Youtube':
        return <Youtube closeComponent={() => setSelectedTopic(null)} />;
      case 'Pull to Refresh':
        return <PullToRefresh closeComponent={() => setSelectedTopic(null)} />;
      default:
        return <Slider closeComponent={() => setSelectedTopic(null)} />;
    }
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      {AnimationComponents.map((item, index) => {
        return (
          <Pressable
            key={index.toString()}
            onPress={() => setSelectedTopic(item)}
            style={styles.menuItem}>
            <Text style={styles.menuItemIcon}>👉</Text>
            <Text style={styles.menuItemName}>{`${index + 1}. ${item}`}</Text>
          </Pressable>
        );
      })}
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  menuItem: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#dcdcdc',
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuItemIcon: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginRight: 20,
  },
  menuItemName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
});
