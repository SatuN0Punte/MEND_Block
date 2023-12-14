import { Link } from 'react-router-dom';

const Post = () => {
  return (
    <div className='post'>
      <div className='images'>
        <Link to='/post-detail'>
          <img src="https://s.isanook.com/ns/0/ud/1359/6796150/raccoon.jpg?ip/crop/w728h431/q80/webp" alt='' />
        </Link>
      </div>
      <div className='texts'>
        <Link to='/post-detail'>
          <h2>ไล่ออกเปลี่ยนชีวิต! "อดีตครูสาว" ผันตัวทำโอนลีแฟนส์ แค่ 6 เดือนกวาดเงินไป 35 ล้าน</h2>
        </Link>
        <p className='info'>
          <a href='https://www.sanook.com/news/6796150/ className='author'>
            Punyaphat
          </a>
          <time>12 December 2023 - 18:52</time>
        </p>
        <p className='summary'>
        "แรคคูน" สวมวิญญาณนินจา ปีนตึก 23 ชั้น - ชาวเมืองฮือฮา แห่ถ่ายคลิปลงโซเชียล
        </p>
      </div>
    </div>
  );
};

export default Post;
