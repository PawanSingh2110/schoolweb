import React from 'react';
import { FaArrowAltCircleRight, FaArrowRight } from 'react-icons/fa';

const Card = ({ image, title, eventDate, venue }) => {
    return (
      <div className="bg-white shadow-md rounded-lg p-4 flex flex-col h-full">
        <img src={image} alt={title} className="rounded-lg w-full h-[200px] sm:h-[250px] md:h-[300px]" />
        <div className="flex flex-col flex-grow">
          <h2 className="text-lg font-bold mt-4">{title}</h2>
          <p className="text-sm text-gray-500">Event Date: {eventDate}</p>
          <p className="text-sm text-gray-500">Venue: {venue}</p>
        </div>
        <button className="mt-4 text-red-500 font-semibold flex justify-center gap-2 items-center">
          <FaArrowAltCircleRight /> View Achievement
        </button>
      </div>
    );
  };

const CardSection = () => {
  const achievements = [
    {
        image: 'https://images.unsplash.com/reserve/91JuTaUSKaMh2yjB1C4A_IMG_9284.jpg?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YWNoaXZlbWVudHN8ZW58MHx8MHx8fDA%3D',
        title: 'Sports Day Champion',
        eventDate: '2024-03-15',
        venue: 'Chennai, India',
      },
    {
      image: 'https://plus.unsplash.com/premium_photo-1714324365626-f03e9213791f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YWNoaXZlbWVudHN8ZW58MHx8MHx8fDA%3D',
      title: '8th Modern Pentathlon Laser Run',
      eventDate: '2024-04-27',
      venue: 'Amravati, Maharashtra',
    },
    // Add 22 more achievements here
    {
      image: 'https://plus.unsplash.com/premium_photo-1682310169766-234aafa39c08?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YWNoaXZlbWVudHN8ZW58MHx8MHx8fDA%3D',
      title: 'Science Fair Winner',
      eventDate: '2024-05-10',
      venue: 'Mumbai, India',
    },
    {
      image: 'https://media.istockphoto.com/id/1065695860/photo/big-group-happy-peoples-silhouettes-success-raised-hands.webp?b=1&s=612x612&w=0&k=20&c=jxhhUcPKMJQ39fIlnGwZeUrm9OT_qZculVatvw62QmI=',
      title: 'Sports Day Champion',
      eventDate: '2024-03-15',
      venue: 'Chennai, India',
    },
    {
      image: 'https://plus.unsplash.com/premium_photo-1700675175408-5fe0d5851e57?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YWNoaXZlbWVudHN8ZW58MHx8MHx8fDA%3D',
      title: 'Top in Class - Grade 10',
      eventDate: '2024-02-01',
      venue: 'Kolkata, India',
    },
    {
      image: 'https://media.istockphoto.com/id/954924774/photo/hand-holding-winner-trophy.webp?b=1&s=612x612&w=0&k=20&c=0_O-k5YMvOtNDM5luOBtXIC2Dwy2O3tdlkvOQ0RvW9U=',
      title: 'Cultural Fest Best Performer',
      eventDate: '2024-07-12',
      venue: 'Bangalore, India',
    },
    {
      image: 'https://media.istockphoto.com/id/1453308201/photo/excited-indian-student-schoolgirl-wearing-school-uniform-holding-victory-trophy-in-hand.webp?b=1&s=612x612&w=0&k=20&c=VSUW_FDlJAkF7-iqdgRm2AB5u-tyxL4q5DPbOyCuNLM=',
      title: 'National Debate Competition',
      eventDate: '2024-09-18',
      venue: 'Pune, India',
    },
    {
      image: 'https://media.istockphoto.com/id/2152019293/photo/photo-of-attractive-pretty-business-lady-in-formalwear-isolated-white-background-stock-photo.jpg?s=2048x2048&w=is&k=20&c=XTTsRYp9887OzNiPrToE5rosOtLOZAR4suH_sbj1oKI=',
      title: 'Math Olympiad Winner',
      eventDate: '2024-11-05',
      venue: 'Hyderabad, India',
    },
    {
      image: 'https://media.istockphoto.com/id/961399110/photo/winning-team-is-holding-trophy-in-hands-silhouettes-of-many-hands-in-sunset.webp?b=1&s=612x612&w=0&k=20&c=dUY4J1GsMSOjMvl4juroEu678lPW0_o_TPAW8Yjt2qU=',
      title: 'Inter-School Quiz Champion',
      eventDate: '2024-08-14',
      venue: 'Delhi, India',
    },
    {
        image: 'https://plus.unsplash.com/premium_photo-1714324365626-f03e9213791f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YWNoaXZlbWVudHN8ZW58MHx8MHx8fDA%3D',
        title: 'Chess Tournament Winner',
      eventDate: '2024-10-22',
      venue: 'Goa, India',
    },
    {
        image: 'https://plus.unsplash.com/premium_photo-1714324365626-f03e9213791f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YWNoaXZlbWVudHN8ZW58MHx8MHx8fDA%3D',
        title: 'Art Exhibition First Prize',
      eventDate: '2024-04-30',
      venue: 'Lucknow, India',
    },
    {
      image: 'https://media.istockphoto.com/id/961399110/photo/winning-team-is-holding-trophy-in-hands-silhouettes-of-many-hands-in-sunset.webp?b=1&s=612x612&w=0&k=20&c=dUY4J1GsMSOjMvl4juroEu678lPW0_o_TPAW8Yjt2qU=',
      title: 'Environmental Project Leader',
      eventDate: '2024-05-21',
      venue: 'Jaipur, India',
    },
    {
        image: 'https://plus.unsplash.com/premium_photo-1714324365626-f03e9213791f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YWNoaXZlbWVudHN8ZW58MHx8MHx8fDA%3D',
        title: 'Best Science Project',
      eventDate: '2024-06-18',
      venue: 'Patna, India',
    },
    {
        image: 'https://plus.unsplash.com/premium_photo-1714324365626-f03e9213791f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YWNoaXZlbWVudHN8ZW58MHx8MHx8fDA%3D',
        title: 'Top Performer in Drama',
      eventDate: '2024-07-25',
      venue: 'Indore, India',
    },
    {
        image: 'https://plus.unsplash.com/premium_photo-1714324365626-f03e9213791f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YWNoaXZlbWVudHN8ZW58MHx8MHx8fDA%3D',
        title: 'Leadership Award',
      eventDate: '2024-08-30',
      venue: 'Nagpur, India',
    },
    {
      image: 'https://media.istockphoto.com/id/961399110/photo/winning-team-is-holding-trophy-in-hands-silhouettes-of-many-hands-in-sunset.webp?b=1&s=612x612&w=0&k=20&c=dUY4J1GsMSOjMvl4juroEu678lPW0_o_TPAW8Yjt2qU=',
      title: 'Community Service Award',
      eventDate: '2024-12-01',
      venue: 'Ranchi, India',
    },
    {
      image: 'https://plus.unsplash.com/premium_photo-1714324365626-f03e9213791f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YWNoaXZlbWVudHN8ZW58MHx8MHx8fDA%3D',
        title: 'Excellence in Sports',
      eventDate: '2024-09-10',
      venue: 'Bhopal, India',
    },
    {
      image: 'https://media.istockphoto.com/id/961399110/photo/winning-team-is-holding-trophy-in-hands-silhouettes-of-many-hands-in-sunset.webp?b=1&s=612x612&w=0&k=20&c=dUY4J1GsMSOjMvl4juroEu678lPW0_o_TPAW8Yjt2qU=',
      title: 'Best in Music Performance',
      eventDate: '2024-10-05',
      venue: 'Surat, India',
    },
    {
        image: 'https://plus.unsplash.com/premium_photo-1714324365626-f03e9213791f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YWNoaXZlbWVudHN8ZW58MHx8MHx8fDA%3D',
        title: 'Innovative Project Award',
      eventDate: '2024-11-20',
      venue: 'Vadodara, India',
    },
    {
        image: 'https://plus.unsplash.com/premium_photo-1714324365626-f03e9213791f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YWNoaXZlbWVudHN8ZW58MHx8MHx8fDA%3D',
        title: 'Public Speaking Champion',
      eventDate: '2024-01-15',
      venue: 'Noida, India',
    },
    {
        image: 'https://plus.unsplash.com/premium_photo-1700675175408-5fe0d5851e57?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YWNoaXZlbWVudHN8ZW58MHx8MHx8fDA%3D',
        title: 'Best Actor in Play',
      eventDate: '2024-02-25',
      venue: 'Ghaziabad, India',
    },
    {
        image: 'https://plus.unsplash.com/premium_photo-1714324365626-f03e9213791f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YWNoaXZlbWVudHN8ZW58MHx8MHx8fDA%3D',
        title: 'Top in Class - Grade 12',
      eventDate: '2024-03-20',
      venue: 'Faridabad, India',
    },
    {
        image: 'https://plus.unsplash.com/premium_photo-1714324365626-f03e9213791f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YWNoaXZlbWVudHN8ZW58MHx8MHx8fDA%3D',
        title: 'Cultural Fest Best Singer',
      eventDate: '2024-04-08',
      venue: 'Dehradun, India',
    },
    {
        image: 'https://plus.unsplash.com/premium_photo-1700675175408-5fe0d5851e57?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YWNoaXZlbWVudHN8ZW58MHx8MHx8fDA%3D',
        title: 'Top Performer in Math',
      eventDate: '2024-05-15',
      venue: 'Ahmedabad, India',
    },
  ];

  return (
    <div>
         <div className=" title w-full h-48 py-10  text-white bg-orange-500">
        <h1 className="lg:text-5xl text-3xl font-medium text-center ">Achievements</h1>
        <h1 className="text-center font-bold mt-5 flex items-center gap-1 justify-center">Home <FaArrowRight/> About Us <FaArrowRight/> <span className="font-medium "> Achievements</span> </h1>
      </div>
      <div className="px-10 py-16">
        <h1 className="text-4xl text-black font-bold">Achievements</h1>
        <hr className=" border-2 border-black rounded-md w-[20%] lg:w-[15%] xl:w-[6%] mt-3" />
      </div>
        <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {achievements.map((achievement, index) => (
          <Card
            key={index}
            image={achievement.image}
            title={achievement.title}
            eventDate={achievement.eventDate}
            venue={achievement.venue}
          />
        ))}
      </div>
    </div>
    </div>
  );
};

export default CardSection;
