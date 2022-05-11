
import React, { useState } from 'react';
import { Text, Image, View, Dimensions } from 'react-native';
import { Rating, AirbnbRating } from 'react-native-ratings';
import { styles } from '../assets/styles/productStyle';
import SkeletonPlaceholder from "react-native-skeleton-placeholder";



const { width, height } = Dimensions.get('screen');

const Product = ({ valueProduct, isLoading=true }) => {

  const { title, image, brand, price, review } = valueProduct;
  const { main, deal } = price;
  const { people, stars } = review;

  // const [loadding, setLoading] = useState(false);
  // let Description = 'Leather Key Ring - Wisteria ghdgfdgfd fbggfdgf fggfd dffhd ';
  // let Deal = 25.53;


  const ratingCompleted = (rating) => {
    console.log("Rating is: " + rating)
  }

  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>

      {isLoading === true ?
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
                startingValue={stars}
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
              <Text style={styles.txtScores}>{people}</Text>
            </View>
            <View style={styles.rowBottom}>
              <View style={styles.columnLeft}>

                <View style={styles.viewTitleDescription}>

                  <Text style={styles.txtTitle}>{title}</Text>
                  {brand && <Text style={styles.txtDescription}>
                    {brand.length <= 27 ? brand : `${brand.substring(0, 27)}...`}
                  </Text>}

                </View>

                <View style={styles.viewPriceDeal}>
                  {deal && (<>
                    <Text style={styles.txtPriceDeal}>${deal} </Text>
                    <Text style={styles.txtDeal}>تخفیف</Text>
                  </>

                  )}
                </View>

                <Text style={styles.txtPriceMain}>${main}</Text>

              </View>

              <View style={styles.columnRight}>
                <Image source={{ uri: image }}
                 style={{ width: width/4, height:height/9,resizeMode:'contain' }}
                />
                {/* <Text>img</Text> */}
              </View>

            </View>
          </View>
        )}

    </View>

  )
}
export default Product;
