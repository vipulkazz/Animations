import React, {useReducer} from 'react';
import {
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import Animated, {
  useAnimatedRef,
  measure,
  useSharedValue,
  useAnimatedStyle,
  useDerivedValue,
  withSpring,
  withTiming,
  runOnUI,
} from 'react-native-reanimated';
import {createBox, createText} from '@shopify/restyle';
import {size} from '../Theme/Index';
import Arrow from './Arrow';
const cat1 = require('../../assets/Categories/cat1.png');
const cat2 = require('../../assets/Categories/cat2.png');
const cat3 = require('../../assets/Categories/cat3.png');
const cat4 = require('../../assets/Categories/cat4.png');
const cat5 = require('../../assets/Categories/cat5.png');
const cat6 = require('../../assets/Categories/cat6.png');
const cat7 = require('../../assets/Categories/cat7.png');
const cat8 = require('../../assets/Categories/cat8.png');
const cat9 = require('../../assets/Categories/cat9.png');
const Box = createBox();
const Text = createText();
const list = [
  {
    id: 1,
    title: 'PC & ACCESSORIES',
    subTitle: 'Desktop & All in one(AIO)...',
    image: cat1,
    categories: [],
    show: false,
  },
  {
    id: 2,
    title: 'PRINTING SOLUTION',
    subTitle: 'Laser printer, Scanner...',
    image: cat2,
    categories: [
      {
        show: false,
        id: 1,
        name: 'Inkjet & Ink Tank Printer',
        subCategories: [
          {id: 1, name: 'Canon Laser Printer'},
          {id: 2, name: 'HP Laser Printer'},
          {id: 3, name: 'Brother Laser Printer'},
        ],
      },
      {id: 2, name: 'Laser Printer', subCategories: [], show: false},
      {id: 3, name: 'Scanner', subCategories: [], show: false},
      {id: 4, name: 'Labeller & Tape', subCategories: [], show: false},
      {
        id: 4,
        name: 'Ink Cartridge & Ink Bottle',
        subCategories: [],
        show: false,
      },
      {id: 4, name: 'Toner & Drum', subCategories: [], show: false},
      {
        id: 4,
        name: 'Dot Matrix Printers & Ribbon',
        subCategories: [],
        show: false,
      },
      {id: 4, name: 'Papers', subCategories: [], show: false},
    ],
    show: false,
  },
  {
    id: 3,
    title: 'MULTIMEDIA & DEVICES',
    subTitle: 'Earphones, Wireless Airbuds...',
    image: cat3,
    categories: [],
    show: false,
  },
  {
    id: 4,
    title: 'MOBILE ACCESSORIES',
    subTitle: 'Power Banks, Adaptors...',
    image: cat4,
    categories: [],
    show: false,
  },
  {
    id: 5,
    title: 'HOME & LIVING',
    subTitle: 'Home Improvement, Cooking...',
    image: cat5,
    categories: [],
    show: false,
  },
  {
    id: 6,
    title: 'Lifestyle Living',
    subTitle: 'Personal Care, Outdoore &...',
    image: cat6,
    categories: [],
    show: false,
  },
  {
    id: 7,
    title: 'Gamers Zone',
    subTitle: 'Gaming Laptops, Monitors...',
    image: cat7,
    categories: [],
    show: false,
  },
  {
    id: 8,
    title: 'Office Solutions',
    subTitle: 'Software, Networking...',
    image: cat8,
    categories: [],
    show: false,
  },
  {
    id: 9,
    title: 'Groceries',
    subTitle: 'Software, Networking...',
    image: cat9,
    categories: [],
    show: false,
  },
];

export default ({navigation}) => {
  const [state, setState] = useReducer(
    (state, newState) => ({...state, ...newState}),
    {
      list: list,
    },
  );

  return (
    <Box flex={1}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {list.map(item => {
          const {image, title, categories} = item;
          const aref = useAnimatedRef();
          const open = useSharedValue(false);
          const progress = useDerivedValue(() =>
            open.value ? withSpring(1) : withTiming(0),
          );
          const height = useSharedValue(0);
          const style = useAnimatedStyle(() => ({
            height: height.value * progress.value + 1,
            opacity: progress.value === 0 ? 0 : 1,
          }));
          return (
            <>
              <TouchableOpacity
                key={item.id}
                onPress={() => {
                  if (height.value === 0) {
                    runOnUI(() => {
                      'worklet';
                      height.value = measure(aref).height;
                    })();
                  }
                  open.value = !open.value;
                }}>
                <Box
                  position="absolute"
                  right={0}
                  left={20}
                  zIndex={100}
                  top={50}
                  justifyContent="center">
                  <Box flexDirection="row">
                    <Text variant="black20Medium">{title}</Text>
                    {categories.length > 0 ? <Arrow {...{progress}} /> : null}
                  </Box>
                </Box>
                <Image source={image} style={{width: size.width}} />
              </TouchableOpacity>
              <Animated.View style={style}>
                <View
                  ref={aref}
                  onLayout={({
                    nativeEvent: {
                      layout: {height: h},
                    },
                  }) => {}}>
                  {categories.map(e => {
                    const {subCategories, id} = e;
                    const aref = useAnimatedRef();
                    const open = useSharedValue(false);
                    const progress = useDerivedValue(() =>
                      open.value ? withSpring(1) : withTiming(0),
                    );
                    const height = useSharedValue(0);

                    const style = useAnimatedStyle(() => ({
                      height: height.value * progress.value + 1,
                      opacity: progress.value === 0 ? 0 : 1,
                    }));
                    return (
                      <>
                        <TouchableWithoutFeedback
                          onPress={() => {
                            if (height.value === 0) {
                              runOnUI(() => {
                                'worklet';
                                height.value = measure(aref).height;
                              })();
                            }
                            open.value = !open.value;
                          }}>
                          <Box
                            paddingHorizontal="l"
                            backgroundColor="primary2"
                            height={50}
                            flexDirection="row"
                            justifyContent="space-between"
                            alignItems="center">
                            <Text variant="black16Regular">{e.name}</Text>
                            {subCategories.length > 0 ? (
                              <Arrow {...{progress}} />
                            ) : null}
                          </Box>
                        </TouchableWithoutFeedback>
                        <Animated.View style={style}>
                          <View
                            ref={aref}
                            onLayout={({
                              nativeEvent: {
                                layout: {height: h},
                              },
                            }) => {}}>
                            {subCategories.map(e => {
                              return (
                                <>
                                  <TouchableWithoutFeedback
                                    onPress={() => {
                                      navigation.navigate('SingleCategory');
                                    }}>
                                    <Box
                                      paddingHorizontal="l"
                                      backgroundColor="white"
                                      height={50}
                                      flexDirection="row"
                                      justifyContent="space-between"
                                      alignItems="center">
                                      <Text variant="secondary3Regular">
                                        {e.name}
                                      </Text>
                                    </Box>
                                  </TouchableWithoutFeedback>
                                </>
                              );
                            })}
                          </View>
                        </Animated.View>
                      </>
                    );
                  })}
                </View>
              </Animated.View>
            </>
          );
        })}
      </ScrollView>
    </Box>
  );
};
