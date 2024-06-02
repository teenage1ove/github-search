import { useAppSelector } from '../hooks/redux'

function FavoritesPage() {
    const {favorites} = useAppSelector(state => state.github)

    if (favorites.length === 0) return <p className='text-center'>No items.</p>


    return (
        <div className='flex justify-center pt-10 mx-auto h-screen'>
            <ul className='list-none'>
                {favorites.map(f => (
                    <li key={f} className='my-2 py-2 px-4 bg-slate-400 hover:underline'>
                        <a href={f} target='_blank' className='text-white'>{f}</a>
                    </li>
                ))}
            </ul>
        </div>   
    );
}

export default FavoritesPage;