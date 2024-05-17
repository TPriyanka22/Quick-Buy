@import "../../styles/breakpoints.scss";

.quick-buy-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 14px;
  padding-top: 20px;

  @include md {
    align-items: center;
    flex-direction: row;
    padding-top: 0px;
    height: 90px;
  }

  .quick-buy-logo-container {
    font-family: "Sansita Swashed", cursive;
    font-size: 28px;
    width: 100%;
    margin-top: -10px;
    display: flex;
    align-items: center;

    @include md {
      font-size: 32px;
      width: 210px;
    }

    .quick-buy-right-content-mobile {
      display: flex;
      margin-left: auto;
      font-family: "Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI",
        "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
        "Helvetica Neue", sans-serif;
      margin-top: 8px;
      @include md {
        display: none;
      }

      // Mobile cart container
      .quick-buy-cart-container {
        position: relative;

        div {
          position: absolute;
          top: -4px;
          right: -8px;
          width: 20px;
          height: 20px;
          border-radius: 100%;
          background-color: #000;
          display: flex;
          align-items: center;
          justify-content: center;

          span {
            color: white;
            font-size: 12px;
            font-weight: bold;
          }
        }
      }
      .quick-buy-profile-container {
        margin-left: 30px;
      }
    }
  }

  .quick-buy-search-container {
    display: flex;
    align-items: center;
    color: grey;
    flex-grow: 1;
    border: 1px solid #eee;
    border-radius: 10px;
    box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.2);
    margin-top: 20px;
    padding: 10px;

    @include md {
      border: none;
      box-shadow: none;
      margin-top: 0px;
      padding: 0px;
    }

    form {
      width: 100%;

      .quick-buy-search-input {
        border: 0;
        display: flex;
        width: 100%;
        background-color: transparent;
        font-size: 14px;
        flex-wrap: wrap;
      }
    }

    .quick-buy-search-icon {
      margin-right: 10px;
      -webkit-transform: scaleX(-1);
      transform: scaleX(-1);
    }
  }
  .quick-buy-right-content {
    display: none;
    font-weight: bold;
    margin-left: auto;
    @include md {
      display: flex;
    }

    .quick-buy-cart-container {
      display: flex;
      align-items: center;
      cursor: pointer;
      padding: 8px;

      .quick-buy-cart-icon {
        margin-right: 8px;
      }
    }

    .quick-buy-profile-container {
      display: flex;
      align-items: center;
      margin-left: 40px;
      position: relative;

      .quick-buy-profile-photo {
        width: 32px;
        height: 32px;
        border-radius: 50px;
        margin-right: 14px;
        z-index: 10;
      }

      .quick-buy-arrow-icon {
        margin-left: 8px;
        margin-top: 1px;
        z-index: 10;
      }

      span {
        z-index: 10;
      }

      .quick-buy-dropdown {
        display: none;
        position: absolute;
        background-color: transparent;
        z-index: 20;
        top: 10px;
        left: -50%;
        padding: 20px;

        .quick-buy-arrow-up {
          width: 0;
          height: 0;
          border-left: 15px solid transparent;
          border-right: 15px solid transparent;
          border-bottom: 15px solid #f1f1f1;
        }
        .quick-buy-dropdown-menu {
          background-color: #f1f1f1;
          line-height: 42px;
          font-size: 14px;
        }
      }

      &:hover {
        .quick-buy-dropdown {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          min-width: 300px;

          .quick-buy-dropdown-menu {
            background-color: #fff;
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding: 30px;
            padding-right: 50px;
            border: 1px solid #d6d6d6;
            border-radius: 10px;
            box-shadow: 0 4px 3px 1px rgba(0, 0, 0, 0.07);
          }
        }
      }
    }
  }

  .quick-buy-right-menu {
    .quick-buy-menu-content {
      transform: translate3d(100vw, 0, 0);
      position: fixed;
      top: 0;
      right: 0;
      background-color: #0b1115;
      height: 100%;
      width: 70vw;
      transition: all 0.5s ease;
      flex-direction: column;
      display: flex;
      color: white;
      z-index: 100;
      padding-top: 20px;

      a {
        font-size: 24px;
        text-align: center;
        margin: 20px;
      }
    }
    .quick-buy-background {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100%;
      background-color: transparent;
      cursor: pointer;
      border: 0;

      @include md {
        display: none;
      }
    }
  }
}
