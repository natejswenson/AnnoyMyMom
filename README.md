
# Annoy My Mom

* [view on amazon](https://www.amazon.com/Nate-Swenson-Annoy-my-Mom/dp/B07GFP9M5F/ref=cm_cr_arp_d_product_top?ie=UTF8)

## Description

Alexa will annoy you momentarily. 
* New to Version 1.2 the skill has got much more Annoying
* For Developers wanting to use this As a template I highly encourage it! 
    - You will need a policy that gives your Lambda function rights to S3, Lambda, and CLoudWatch
```javascrips
//proccess.env variables are set in the labda function, not github actions use the format
// '<audio src="https://{YOUR_S3_BUCKET}.s3.amazonaws.com/{yourfile.mp3}"/>'
let S31 = process.env.S3_1
let S32 = process.env.S3_2
let S33 = process.env.S3_3
let S34 = process.env.S3_4
var music =[ S31,S32,S33,S34]; 
```
*This allowed me to not make my s3 buckets public I was having troubing getting other methods to work

## Top Rated Alexa Skill

* *30K + reviews*
* **Average Rating 4.4 stars** :star: :star: :star: :star:

# Enable on your Alexa Devices

* say *Alexa Annoy My Mom*

