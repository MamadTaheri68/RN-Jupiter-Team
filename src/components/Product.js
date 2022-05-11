
import React, { useState } from 'react';
import { Text, Image, View, Dimensions } from 'react-native';
import { Rating, AirbnbRating } from 'react-native-ratings';
import { styles } from '../assets/styles/productStyle';
import SkeletonPlaceholder from "react-native-skeleton-placeholder";



const { width, height } = Dimensions.get('screen');

const Product = ({ valueProduct}) => {

  
    // const { title, image, brand, price, review } = valueProduct;
    // const { main, deal } = price;
    // const { people, stars } = review;



  const ratingCompleted = (rating) => {
    console.log("Rating is: " + rating)
  }

  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>

      {valueProduct.isLoading ?
        (<View style={styles.cardProduct}>
          <SkeletonPlaceholder highlightColor='grey' speed={2900}>
            < View style={styles.skeletonRowTop} />
            <View style={styles.skeletonRowBottom} >
              <View style={styles.columnLeft}>
                < View style={styles.skeletonTitle} />
                < View style={styles.skeletonDescription} />
                < View style={styles.skeletonPrice} />
              </View>
              <View style={styles.columnRight} >
                <View style={styles.skeletonImg} />
              </View>
            </View>
          </SkeletonPlaceholder>
        </View>
        ) : (

          <View style={styles.cardProduct}>
            <View style={styles.rowTop}>
              <Rating
                type='custom'
                startingValue={valueProduct.review.stars}
                ratingCount={5}
                ratingColor='#f1c40f'
                ratingBackgroundColor='#fff'
                // tintColor='#000'
                imageSize={width / 22}
                showRating={false}
                readonly={false}
                jumpValue={0.5}
                onSwipeRating={(value) => ratingCompleted(value)}
              />
              <Text style={styles.txtScores}>{valueProduct.review.people}</Text>
            </View>
            <View style={styles.rowBottom}>
              <View style={styles.columnLeft}>

                <View style={styles.viewTitleDescription}>

                  <Text style={styles.txtTitle}>{valueProduct.title}</Text>
                  {valueProduct.brand && <Text style={styles.txtDescription}>
                    {valueProduct.brand.length <= 27 ? valueProduct.brand : `${valueProduct.brand.substring(0, 27)}...`}
                  </Text>}

                </View>

                <View style={styles.viewPriceDeal}>
                  {valueProduct.price.deal && (<>
                    <Text style={styles.txtPriceDeal}>${valueProduct.price.deal} </Text>
                    <Text style={styles.txtDeal}>تخفیف</Text>
                  </>

                  )}
                </View>

                <Text style={styles.txtPriceMain}>${valueProduct.price.main}</Text>

              </View>

              <View style={styles.columnRight}>
                <Image source={{ uri: valueProduct.image }}
                  style={styles.img}
                />
              </View>

            </View>
          </View>
        )}

    </View>

  )
}
export default Product;
