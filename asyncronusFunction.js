function makeCoffee (callback) {
  let coffee = null
  console.log('kopi sedang dibuat');
  setTimeout(() => {
    console.log('bentarrr');
  }, 500)
  setTimeout(() => {
    coffee = 'kopis sudah jadi!';
    callback(coffee)
  }, 1000)
}

// makeCoffee(function(kopi){ console.log(kopi); })

function ambilGelas(gelas=false) {
  return new Promise((res, rej) => {
    if(gelas) {
      res('bentarr')
    }else{
      rej('gak dapat gelas')
    }
  })
}

function tungkanBahan(bahan=false) {
  return new Promise((res, rej) => {
    if(bahan) {
      res('bahan telah dimasukkan')
    }else{
      rej('bahan mana bahan..')
    }
  })
}

ambilGelas(true)
  .then(res=>{
    console.log(res)
    return tungkanBahan(true)
  })
  .then(res=>{
    console.log(res);
  })