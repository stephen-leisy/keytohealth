import React from 'react';
import DoctorCard from '../components/DoctorCard';

export default function drBruceDickson() {
  return (
    <>
      <DoctorCard
        doctorName={'Dr. Bruce Dickson'}
        bio={
          'Dr. Bruce Dickson has been in private family practice in McMinnville, Oregon since 1979. He received his undergraduate degree in biology from Wake Forest University, and obtained his naturopathic degree from the National College of Naturopathic Medicine. He is board certified in Homeopathic Medicine and is past president of the Homeopathic Academy of Naturopathic Physicians. He has served the National College of Naturopathic Medicine as chair of the board of trustees, interim president, supervising clinic physician, and associate professor of homeopathy. He is a visiting faculty member, teaching advanced homeopathy to senior students at the Southwest College of Naturopathic Medicine. In 1997 he received the Tyler Pioneer award for advancing the naturopathic educational mission.'
        }
        resume={
          'Dr. Dickson has a passionate view about naturopathic care for his patients.  I was drawn to Naturopathic Medicine because it affirms many of my own health care values: respect for quality of life, informed choice, personal responsibility and the inter-connectedness of the body, mind, and spirit. To me Naturopathic Medicine is more than a health care system. It offers all of us the opportunity for personal growth and transformation, not merely on a physical level, but also emotionally and spiritually. Dr Dickson uses a variety of integrated approaches when treating his patients such as Homeopathic Medicine which provides effective treatment for people of all ages, whether for acute illnesses like ear infections, sinusitis, cystitis, or pneumonia, or for chronic diseases such as hepatitis, chronic fatigue syndrome and fibromyalgia,heart disease, and cancer. When he combines homeopathy with nutritional therapy, stress management, and structural integration, the results are even more profound. Dr. Dickson has advanced training in injection therapy used to treat chronic pain from accidents, injuries, and certain diseases.'
        }
        image={
          'https://www.keytohealthclinic.com/wp-content/uploads/2019/11/key-to-health-dr-bruce-dickson-NEW.jpg'
        }
      />
    </>
  );
}
