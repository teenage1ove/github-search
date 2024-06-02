import { useActions } from '../hooks/actions'
import { useAppSelector } from '../hooks/redux'

function FavoritesPage() {
    const {favorites} = useAppSelector(state => state.github)
    const {removeFavorite} = useActions()

    const removeFromFavorite = (f:string) => {
        removeFavorite(f)
    }

    if (favorites.length === 0) return <p className='text-center pt-10'>No items.</p>

    return (
        <div className='flex justify-center pt-10 mx-auto h-screen'>
            <ul className='list-none'>
                {favorites.map(f => (
                    <li key={f} className='flex justify-between gap-7 items-center my-2 py-2 px-4 bg-slate-400 '>
                        <a href={f} target='_blank' className='text-white hover:underline'>{f}</a>
                        <button
                        className='py-1 px-4 bg-red-400 rounded hover:shadow-md hover:bg-red-300 transition-all'
                        onClick={() => removeFromFavorite(f.toString())}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>   
    );
}

export default FavoritesPage;