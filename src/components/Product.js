
import React, { useState } from 'react';
import { Text, Image, View, Dimensions } from 'react-native';
import { Rating, AirbnbRating } from 'react-native-ratings';
import { styles } from '../assets/styles/productStyle';
import SkeletonPlaceholder from "react-native-skeleton-placeholder";



const { width, height } = Dimensions.get('screen');

const Product = () => {

  const [loadding, setLoading] = useState(true);
  let Description = 'Leather Key Ring - Wisteria ghdgfdgfd fbggfdgf fggfd dffhd ';
  let Deal = 25.53;


  const ratingCompleted = (rating) => {
    console.log("Rating is: " + rating)
  }

  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>

      {loadding === true ?
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

              {/* <AirbnbRating
          count={5}
          //  reviews={["Bad", "OK", "Good", "Very Good", "Wow"]}
          defaultRating={3}
          size={15}
          selectedColor='#f1c40f'
          unSelectedColor='#eee8aa'
          // reviewSize={25}
          // reviewColor='red'
          showRating={false}

        /> */}
              <Rating
                type='custom'
                startingValue={4.5}
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
              <Text style={styles.txtScores}>6979</Text>
            </View>
            <View style={styles.rowBottom}>
              <View style={styles.columnLeft}>

                <View style={styles.viewTitleDescription}>

                  <Text style={styles.txtTitle}>Sponsored Ad - Apple AirTag</Text>
                  {Description && <Text style={styles.txtDescription}>
                    {Description.length <= 27 ? Description : `${Description.substring(0, 27)}...`}
                  </Text>}

                </View>

                <View style={styles.viewPriceDeal}>
                  {Deal && <Text style={styles.txtPriceDeal}>${Deal} </Text>}
                  <Text style={styles.txtDeal}>تخفیف</Text>
                </View>

                <Text style={styles.txtPriceMain}>$876</Text>

              </View>

              <View style={styles.columnRight}>
                {/* <Image source={}/> */}
                <Text>img</Text>
              </View>

            </View>
          </View>
        )}
      <View style={styles.separator} />
    </View>

  )
}
export default Product;
