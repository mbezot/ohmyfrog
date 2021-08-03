const Example = () => {
    const [tick, setTick] = useState(0)
  
    useEffect(() => {
      // Tick every 1s
      const subs = setInterval(() => {
        setTick((_tick) => _tick + 1)
      }, 1000)
  
      return () => {
        clearInterval(subs)
      }
    }, [])
  
    const drawFavicon: FaviconDrawFunc = useCallback(
      (context) => {
        const array = 'FUCKYOU.'.split('')
        const idx = tick % array.length
        console.log(idx)
        if (array[idx] === '.') {
          return `https://fav.farm/🌚`
        }
        context.font = '180px Arial'
        context.fillStyle = '#fff'
        context.textAlign = 'center'
        context.textBaseline = 'middle'
        context.fillText(array[idx], 100, 100)
  
        return true
      },
      [tick]
    )
  
    const options = useMemo(
      () => ({
        defaultIcon: '/favicon.ico',
        autoSetIcon: true
      }),
      []
    )
  
    const iconURL = useFavicon(drawFavicon, options)
  
    return null
  }