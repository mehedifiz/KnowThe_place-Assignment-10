const ContactCard = ({ icon, title, content }) => {
    return (
        <div className="bg-white rounded-lg shadow-lg p-5 flex items-start">
            <div className="text-purple-600 text-3xl mr-4">
                <i className={icon}></i>
            </div>
            <div>
                <h3 className="text-xl font-bold mb-1">{title}</h3>
                <p className="text-gray-700">{content}</p>
            </div>
        </div>
    );
};

export default ContactCard;
