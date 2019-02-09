This is the client repo for rebuidling these 3 websites:

- [Gyuto Foundation](http://gyutofoundation.org)
- [Delek Children's Foundation](http://delekchildrenfoundation.org)
- [Gyuto Minnesota](http://gyuto.us)

The components shared across all 3 sites are on the master branch.

We started with Gatsby's boilerplate. Readme file [here](https://github.com/gyuto/client/blob/master/README-gatsby.md).

The new Delek Children's Foundation is deployed [here](https://dcf-master.netlify.com/).

The new Gyuto Minnesota is deployed [here](http://gyutominnesota.org).

## To-do list

Please put your name next to the item you intend to build.
Please feel free to use any existing package/tool.
Please feel free to add/edit the list and this readme.

### Client

- [ ] Set up redux
- [ ] Set up component library. We'll grow it along the way.
- [ ] Header including menu
- [ ] Animated banner
- [ ] Basic article page with title, time stamp, author, body, etc.
- [ ] Photo gallery. Sonam mentioned she wants a slideshow? And description for each photo.
- [ ] Donate page for Delek Children's foundation
- [ ] Internal tool for Sonam to login and add articles. Blocked by Firesotre and Google login set up.
- [ ] Site tracking. Fullstory. Google Analytics.
- [ ] Application page/tool for kids to apply for scholarship. Possibly blocked by Firestore setup. Or we might just use Google form.
- [ ] Profile library/page of curently sponsored kids.
- [ ] Footer. With social media links.

### BE or BE-ish

- [ ] Set up Firestore, maybe with Google login. Or Facebook login. But let's do only one way of login? Firestore wasn't good enough to handle multiple ways of login, as of June 2018.
- [ ] Do we need Firebase? Depends. I can't remmeber why we do. lol.
