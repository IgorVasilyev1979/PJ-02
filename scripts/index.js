const completedProjects = [
    {
        city: 'Rostov-on-Don<br>LCD admiral',
        apartmentArea: '81 m2',
        repairTime: '3.5 months',
        repairCost: 'Upon request',
        img: '../images/section2image1.jpg',
        circle: document.querySelector('.section2-nav2-circle0-js'),
        link: document.querySelector('.section2-link-text0-js')
    },
    {
        city: 'Sochi<br>Thieves',
        apartmentArea: '105 m2',
        repairTime: ' 4 months',
        repairCost: 'Upon request',
        img: '../images/section2image2.jpg',
        circle: document.querySelector('.section2-nav2-circle1-js'),
        link: document.querySelector('.section2-link-text1-js')
    },
    {
        city: 'Rostov-on-Don<br>Patriotic',
        apartmentArea: '93 m2',
        repairTime: ' 3 months',
        repairCost: 'Upon request',
        img: '../images/section2image3.jpg',
        circle: document.querySelector('.section2-nav2-circle2-js'),
        link: document.querySelector('.section2-link-text2-js')
    }
  ]
  
  const city = document.querySelector('.section2-info-item-city-js');
  const apartmentArea = document.querySelector('.section2-info-item-apartmentArea-js');
  const repairTime = document.querySelector('.section2-info-item-repairTime-js');
  const repairCost = document.querySelector('.section2-info-item-repairCost-js');
  const img = document.querySelector('.section2-img-js');
  
  const setEntity = (index) => {
    city.innerHTML = completedProjects[index].city;
    apartmentArea.innerHTML = completedProjects[index].apartmentArea;
    repairTime.innerHTML = completedProjects[index].repairTime;
    repairCost.innerHTML = completedProjects[index].repairCost;
    img.style.backgroundImage = `url(${completedProjects[index].img})`;
    completedProjects[0].circle.classList.remove("section2-nav2-circle-selected");
    completedProjects[1].circle.classList.remove("section2-nav2-circle-selected");
    completedProjects[2].circle.classList.remove("section2-nav2-circle-selected");
    completedProjects[index].circle.classList.add("section2-nav2-circle-selected");
    completedProjects[0].link.classList.remove("text-selected");
    completedProjects[1].link.classList.remove("text-selected");
    completedProjects[2].link.classList.remove("text-selected");
    completedProjects[index].link.classList.add("text-selected");
  }
  
  const prev = document.querySelector('.section2-nav2-left-arrow');
  const next = document.querySelector('.section2-nav2-right-arrow');
  let currentIndex = 0;
  
  prev.addEventListener('click', () => {
    if(currentIndex == 0) currentIndex = 3;
    currentIndex -= 1;
    setEntity(currentIndex);
  })
  next.addEventListener('click', () => {
    if(currentIndex == 2) currentIndex = -1;
    currentIndex += 1;
    setEntity(currentIndex);
  })

  document.querySelector('.section2-nav2-circle0-js').addEventListener('click', () => {
    currentIndex = 0;
    setEntity(0);
  })

  document.querySelector('.section2-nav2-circle1-js').addEventListener('click', () => {
    currentIndex = 1;
    setEntity(1);
  })

  document.querySelector('.section2-nav2-circle2-js').addEventListener('click', () => {
    currentIndex = 2;
    setEntity(2);
  })

  document.querySelector('.section2-link-text0-js').addEventListener('click', (event) => {
    event.preventDefault();
    currentIndex = 0;
    setEntity(0);
  })

  document.querySelector('.section2-link-text1-js').addEventListener('click', (event) => {
    event.preventDefault();
    currentIndex = 1;
    setEntity(1);
  })

  document.querySelector('.section2-link-text2-js').addEventListener('click', (event) => {
    event.preventDefault();
    currentIndex = 2;
    setEntity(2);
  })

